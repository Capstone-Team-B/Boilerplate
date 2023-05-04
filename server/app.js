require('dotenv').config();
const express = require("express");
import cors from 'cors';
const mongoose = require("mongoose");

const Routes = require("./api/routes");

const morgan = require("morgan");

const app = express();

app.use(express.json());


const username = "admin";
const password = "CzEmtKC7RKn0aq1o";
const cluster = "cluster0.bymryjo";

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use("/api", Routes);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});

module.exports = app;
