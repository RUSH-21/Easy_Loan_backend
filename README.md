# Easy Loan API
This is the API which powers the Easy Loan application. The api allows creating user accounts, login/logout of users, creating a loan application and fetching all the loans in the system. <br />
Live Demo of API: https://easyloan-api-by-arnab.herokuapp.com/loan <br />
Frontend repo of the App - https://github.com/Arnab-31/Easy-Loan



## Routes

### Create User - (POST) /signup

Use - Create a user account. 
Protection - None. 
Constraints - Email needs to be unique for every user. 


Request Body 
```
{
    "name": "Arnab",
    "email": "Arnab@gmail.com",
    "password": "34nnnsk123k"
}
```

Success Response
```
{
    "user": {
        "role": "user",
        "_id": "60891a24b1252c0015705281",
        "name": "Arnab",
        "email": "arnab@gmail.com",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg5MWEyNGIxMjUyYzAwMTU3MDUyODEiLCJpYXQiOjE2MTk1OTc4NjAsImV4cCI6MTYxOTYwMDg2MH0.VaJuIKutpUVIsmqaQksX8o2Pyp6kfmSd_4L8tn1EERU"
}
```
### Login User - (POST) /login

Use - User can login using email and password.
Protection - None



Request Body 
```
{
    "email": "arnab1@gmail.com",
    "password": "34nnnsk123k"
}
```

Success Response
```
{
    "msg": "You have been logged in successfully",
    "user": {
        "role": "user",
        "_id": "608955ebab02e70015816822",
        "name": "Arnab",
        "email": "arnab1@gmail.com",
        "__v": 2
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg5NTVlYmFiMDJlNzAwMTU4MTY4MjIiLCJpYXQiOjE2MTk2MTMyNjYsImV4cCI6MTYxOTYxNjI2Nn0.CCHJ4v9vDPFWyAZOShwAj6F9V2RJctwfu9555zlmgtY"
}
```

### User Logout  - (POST) /logout

Use - Logs out a user.
Protection - User must be authenticated


Success Response
```
{
    "msg": "Successfully logged out"
}
```
### User Logout from All devices - (POST) /logoutAll

Use - Logs out a user from all devices.
Protection - User must be authenticated


Success Response
```
{
    "msg": "Successfully logged out from all devices"
}
```


### Create a loan application - (POST) /loan

Use - Create a loan application
Protection - User must be authenticated

Request Body 
```
{
   "name": "Akash",
    "email": "akash23@gmail.com",
    "address": "Kolkata",
    "contact": "9187412345",
    "amount": 123444,
    "start_date": "2021-05-16T14:24:56.231Z",
    "expiry_date": "2025-01-31T19:30:00.000Z",
    "type": "Fixed",
}
```


Success Response
```
{
    "_id": "60a12b38686bf704f011e574",
    "name": "Akash",
    "email": "akash23@gmail.com",
    "address": "Kolkata",
    "contact": "9187412345",
    "amount": 123444,
    "start_date": "2021-05-16T14:24:56.231Z",
    "expiry_date": "2025-01-31T19:30:00.000Z",
    "type": "Fixed",
    "emi": 3017.52,
    "__v": 0
}
```


### Fetch all loan applications - (GET) /loan

Use - Get all loan applications
Protection - None


Success Response
```
[
    {
        "_id": "60a10c2621368b00157fa227",
        "name": "Akash Gupta",
        "email": "arnabpoddar.ap11@gmail.com",
        "address": "270, Howrah, Kolkata",
        "contact": "8063377359",
        "amount": 109993,
        "type": "Fixed",
        "start_date": "2021-05-14T00:00:00.000Z",
        "expiry_date": "2022-10-16T00:00:00.000Z",
        "emi": 7117.19,
        "__v": 0
    },
    {
        "_id": "60a10cad21368b00157fa228",
        "name": "Shubham Singh",
        "email": "shubhamsingh@gmail.com",
        "address": "43, FastStreet, Delhi",
        "contact": "7063337363",
        "amount": 279998,
        "type": "floating",
        "start_date": "2021-05-29T00:00:00.000Z",
        "expiry_date": "2022-12-23T00:00:00.000Z",
        "emi": 16210.41,
        "__v": 0
    }
]
```



## Tech Stack
 - Front end Framework - React.js
 - Backend Framework - Express.js
 - Database - Mongo DB
 - State Management - Redux
 - Backend Deployment - Heroku
 - Frontend Deployment - Netlify





