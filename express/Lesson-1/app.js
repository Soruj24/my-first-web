const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Home Page</h1>");
});
app.post("/", (req, res) => {
  res.send("<h1>Hello post</h1>");
});
app.put("/", (req, res) => {
  res.send("<h1>Hello put</h1>");
});
app.delete("/", (req, res) => {
  res.send("<h1>Hello delete </h1>");
});

module.exports = app;
