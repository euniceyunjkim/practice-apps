require("dotenv").config();
const express = require("express");
const path = require("path");
const wordHandlers = require("./db.js");
const axios = require("axios");

const app = express();
app.use(express.json());
// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/**** Other routes here....****/
app.post('/glossary', function (req, res) {
  wordHandlers.saveWord(req.body.word)
  .then(()=>
    res.status(201).end())
  .catch(err=>
    console.log(err))
});

app.get('/glossary', function (req, res) {
  wordHandlers.getWords()
  .then(words=>
    res.json(words))
  .catch(err =>
    console.log(err))
});

/******************************/

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
