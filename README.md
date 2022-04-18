 # NFT Land

### Table of Contents 
 Server
 
- [Start Server Local](./README.md#start-server-local)
- [Examples of Query by Using CRUD API](./README.md#examples-about-query-by-using-CRUD-API)
- [Test Server](./README.md#test-server)

### Start Server Local

Changing to backend directory
```
cd backend
```
Install dependencies:
```
yarn
```
Start MongoDB database local
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

### Examples of Query By Using CRUD API

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

 ###  Test Server
 
At backend folder, after installing dependencies, starting database 
we create .env.test file. 
```
cp .env.example .env.test
```
Edit MONGODB_ACCESS_POINT by a url for testing and run test
```
yarn test
```
