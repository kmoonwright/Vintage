const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

mongoose
  .connect(db, { useNewURLParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));