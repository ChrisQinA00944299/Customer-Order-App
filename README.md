# Note
Please only test with these customer ID's in the app: 
- 1
- 2
- 3

# Setup Instructions
Required Software:
- Docker Desktop v4.2.0+

1. Clone the repository:
```
git clone https://github.com/ChrisQinA00944299/Customer-Order-App.git
```

2. Create a TaxJar account and acquire your own TaxJar Live API Token.

![image](https://user-images.githubusercontent.com/59617012/148628885-cad46b97-1f56-4bd4-96fd-29c0b1343fc1.png)

3. Replace the .env file in the api folder with your own API Token.
```
TAXJAR_API_KEY=<YOUR_API_TOKEN_HERE>
```

4. Docker Compose Set-up:
```
cd <root_folder>
docker-compose pull
docker-compose up
```

5. Navigate to http://localhost:3000:

6. Docker Compose Tear-down:
```
cd <root_folder>
docker-compose down
```
