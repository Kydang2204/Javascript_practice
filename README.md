 # NFT Land
 
## Table of Contents 
[Getting Started](./README.md#getting-started)

 -  [Start Local Server](./README.md#start-local-server)
 
[Documentation](./README.md#documentation)

-	[Server](./README.md#server)

	- [CRUD API](./README.md#crud-api)

[Testing](./README.md#testing)
- [Test Server](./README.md#test-server)

## Getting Started
### Start Local Server

Changing to backend directory
```
cd backend
```
Install dependencies:
```
yarn
```
Start local database
```
docker-compose up -d
```
Create file .env
```
cp .env.example .env
```
Start server local
```
yarn dev
```

## Documentation
### Server
#### CRUD API
**Examples of Query**
Getting users with paging : page = 3, limit = 5
```
localhost:3005/api/User?isPaging=true&page=3&limit=5
```
Getting users with descending name and ascending createdAt
```
localhost:3005/api/User?sort=-name createdAt
```
Getting users with populating userType and notificationSettings
```
localhost:3005/api/User?populate=userType,notificationSettings
```
Finding users that have name is guest and email is guest@nft.com
```
localhost:3005/api/User?filter={"name":"guest","email":"guest@nft.com"}
```

 ##  Testing
 ### Test Server
 
At backend folder, after installing dependencies, starting database, we create .env.test file. 
```
cp .env.example .env.test
```
Edit MONGODB_ACCESS_POINT by a url for testing and run test by command line.
```
yarn test
```
