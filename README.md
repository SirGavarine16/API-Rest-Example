# Restful API
This project is an example of a restful API using Node.js and other libraries.

## Getting started
To run this project:
```bash
npm install
npm run dev
```
* don't forget to set up the enviroment variables through the __.env__ file.

## About the enviroment variables
To have the enviroment variables availables through the project you need to delete the __.template__ from the __.env.template__ file and give the variables some values.

## About the project
You need to first generate a token by sending a POST request with an email and password __testing__ on the request body, the response will have a token that expires in 12 hours.

Endpoints of GET, POST, PUT and DELETE are available for /api/users having a valid token in the __x-token__ field on the request header. GET will return two hardcoded users, the GET with id param will return either 2 of the hardcoded users or a response saying that it couldn't find the user with the specified id. POST needs to have email, name and password fields in the request body. PUT needs an id in the request params and will return either a response not having found a user with the given id or a response with a "updated" user.