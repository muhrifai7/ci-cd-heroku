const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/users", (req, res) => {
  res.status(200).send([]);
});

module.exports = app;
