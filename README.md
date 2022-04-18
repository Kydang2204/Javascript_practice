# Server

 - [Quick start](./README.md#Examples-about-quey)

### Examples about query

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
localhost:3005/api/User?filter = {"name":"Guest"}
```
 
