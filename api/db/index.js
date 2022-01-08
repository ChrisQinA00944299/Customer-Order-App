const mongoose = require('mongoose');
const { Customer, Item, DBStatus } = require('./models');

// Connecting to MongoDB
console.log('Connecting to MongoDB');
// need to update below for running mongodb standalone
mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/palitronica`)
.then(() => {console.log('Intializing DB'); initialize();})
.catch(error => console.log('Could not connect to MongoDB server.'));

const initialize = async () => {
    // 0:disconnected, 1: connected, 2: connecting, 3: disconnecting
    if(mongoose.connection.readyState !== 1) 
    {
        console.log('Could not initialize db as MongoDB is not connected.')
        return;
    }

    const initialized = await DBStatus.find({initialized: true}).count() > 0;
    if(initialized){
        console.log('DB already initialized.');
        return;
    }
    await DBStatus.create({initialized: true});

    await Customer.insertMany([
        {id: '1', name: 'Chris Qin', postal_code: "V1N3J6", city: 'Vancouver', state: 'BC', country: 'CA'},
        {id: '2', name: 'Cindi Boob', postal_code: "M2M3V8", city: 'Toronto', state: 'ON', country: 'CA'},
        {id: '3', name: 'Grace Feng', postal_code: "V4N1M8", city: 'Surrey', state: 'BC', country: 'CA'}
    ]);

    await Item.insertMany([
        {id: '1', name: 'Item 1', price: 5.99},
        {id: '2', name: 'Item 2', price: 8.99},
        {id: '3', name: 'Item 3', price: 3.99}
    ])
    console.log('DB Initialized.')
}

// // If there is a connection error send an error message
// mongoose.connection.on('error', error => {
//     console.log('Database connection error:', error);
// });

// // If connected to MongoDB send a success message
// mongoose.connection.on('disconnected', () => {
//     console.log('Disconnected from Database!');
// });

// // If connected to MongoDB send a success message
// mongoose.connection.once('open', () => {
//     console.log('Connected to Database!');
// });

module.exports = {
    initialize: initialize,
}