const HTTP_Port = 5000;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("THis is my express app");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen(HTTP_Port);
