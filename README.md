 # NFT Land
 
## Table of Contents 
[Getting Started](./README.md#getting-started)

 -  [Start Local Server](./README.md#start-local-server)
 
[Documentation](./README.md#documentation)

-	[Server](./README.md#server)

	- [CRUD API](./README.md#crud-api)

[Test](./README.md#test)
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
Start local database by docker-compose
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

With CRUD API we can get docs, create a doc,  get, update, delete a doc by id of any available model that we have permission.

- Getting docs by using GET method to baseUrl/prefix/modelName
- Getting a doc by using GET method to baseUrl/prefix/modelName/id
- Creating a doc by using POST method to  baseUrl/Prefix/modelName
- Updating a doc by using PUT method to  baseUrl/prefix/modelName/id
- Deleting a doc by using DELETE method to baseUrl/prefix/modelName/id

We also can query paging, populate, filter, sort as these examples.

- Getting users with paging : page = 3, limit = 5
```
localhost:3005/api/User?isPaging=true&page=3&limit=5
```
- Getting users with descending name and ascending createdAt
```
localhost:3005/api/User?sort=-name createdAt
```
- Getting users with populating userType and notificationSettings
```
localhost:3005/api/User?populate=userType,notificationSettings
```
- Finding users that have name is guest and email is guest@nft.com
```
localhost:3005/api/User?filter={"name":"guest","email":"guest@nft.com"}
```

 ##  Test
 ### Test Server
 
At backend folder, after installing dependencies, starting database, we create .env.test file. 
```
cp .env.example .env.test
```
Edit MONGODB_ACCESS_POINT by a url for testing and run test by command line.
```
yarn test
```
