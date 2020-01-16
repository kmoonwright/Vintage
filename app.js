const app = require('./server/server');
const express = require('express');
const expressGraphQL = require('express-graphql');

const server = require('http').createServer(app)

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server is running on port ${port}`));