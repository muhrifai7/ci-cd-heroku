const express = require("express");
const app = express();
const port = process.env.port || 8100;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.get("/users", (req, res) => {
  res.status(200).send([]);
});

app.listen(port, () => {
  console.log("Our App Is Up And Running");
});

module.exports = app;
