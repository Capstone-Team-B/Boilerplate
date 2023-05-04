const express = require("express");
const path = require('path');
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require("morgan");

const authRoutes = require("./routes/auth");
require('dotenv').config();

const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

const username = "admin";
const password = "CzEmtKC7RKn0aq1o";
const cluster = "cluster0.bymryjo";
  // mongodb+srv://admin:CzEmtKC7RKn0aq1o@$cluster0.bymryjo.mongodb.net/?retryWrites=true&w=majority

mongoose
  .connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB error:", err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use("/api", authRoutes);

// error handling for 500
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
