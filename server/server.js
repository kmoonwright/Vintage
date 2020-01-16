const express = require('express');
const mongoose = require('mongoose');
const expressGraphQL = require('express-graphql');
const app = express();
const db = require('../config/keys').mongoURI;

//GraphQL
const models = require('./models/index');
const schema = require('./schema/schema');


mongoose
  .connect(db, { useNewURLParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

if (!db) throw new Error("Provide a string to connect to MongoDB Atlas");


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