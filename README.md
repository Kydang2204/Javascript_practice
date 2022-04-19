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

Change to backend directory
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

With CRUD API we can get docs, create a doc,  get, update, delete a doc by id of any available model.
- Get docs 
```
GET api/modelName
```
- Get a doc by id
```
GET api/modelName/id
```
- Update a doc
```
PUT api/modelName/id
```
- Create a doc
```
POST api/modelName
```
- Delete a doc
```
DELETE api/modelName/id
```
We also can query page, limit, isPaging, populate, filter, sort as these examples.
- Get users with paging : page = 3, limit = 5
```
GET  api/User?isPaging=true&page=3&limit=5
```
- Get users with descending name and ascending createdAt
```
GET api/User?sort=-name createdAt
```
- Get users with populating userType and notificationSettings properties
```
GET api/User?populate=userType,notificationSettings
```
- Find users that have name is "guest" and email is "guest@nft.com"
```
GET api/User?filter={"name":"guest","email":"guest@nft.com"}
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
