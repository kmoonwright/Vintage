const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');

// MongoDB
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

mongoose 
  .connect(db, { useNewURLParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send("HELLO!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));