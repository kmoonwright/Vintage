const express = require('express');
const app = express();

// Configure MongoDB, mongoose
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('../config/keys').mongoURI;
const cors = require('cors');

// Set up middleware
const expressGraphQL = require('express-graphql');

//GraphQL
const models = require('./models/index');
const schema = require('./schema/schema');


mongoose
  .connect(db, { useNewURLParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

if (!db) throw new Error("Provide a string to connect to MongoDB Atlas");

app.use(bodyParser.json());
app.use(cors());

app.use('/graphql', 
  expressGraphQL(req => {
      return {
        schema,
        graphiql: true
      };
  })
);

// app.listen(5000, () => {
//   console.log("Running a GraphQL API server at localhost:5000/graphql");
// });

module.exports = app;