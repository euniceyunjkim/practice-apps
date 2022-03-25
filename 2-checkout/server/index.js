require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");
const {addUserData} = require("./db");
const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//parsing middleware
app.use(express.json());
/**** OTHER ROUTES HERE ****/
app.post("/completed", function(req, res) {
  // console.log(req.body.userData);
  req.body.userData.id = req.session_id;
  // console.log(req.body.userData);
  addUserData(req.body.userData)
  .then(() => {
    console.log('response added to db');
    res.status(201).end();
  })
  .catch(err => {
    console.log('response not added', err);
  })
})

/**** OTHER ROUTES HERE ****/
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
