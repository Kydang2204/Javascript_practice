 # NFT Land
 
###  Table of Contents 

Server :
- [Start Server](./README.md#start-server)
- [Examples-About-Query](./README.md#examples-about-query)
- [Test Server](./README.md#test-server)

### Start Server

Changing to backend directory
```
cd backend
```
Install dependencies:
```
yarn
```
Start MongoDB database
```
docker-compose up -d
```
Create file .env
```
cp .env.example .env
```
Start server
```
yarn dev
```

### Examples about Query

Getting docs with paging : page = 3, limit = 5
```
localhost:3005/api/User?isPaging=true&page=3&limit=5
```
Getting docs with descending name and ascending createdAt
```
localhost:3005/api/User?sort="-name createdAt"
```
Getting docs with populating userType and reward
```
localhost:3005/api/User?populate="userType,reward"
```
Finding docs that have name is Guest

```
localhost:3005/api/User?filter={"name":"Guest"}
```

 ###  Test Server
 
At backend folder, after installing dependencies, starting database 
we will create .env.test file. 
```
cp .env.example .env.test
```
Edit MONGODB_ACCESS_POINT by a url for testing.
Run test
```
yarn test
```
