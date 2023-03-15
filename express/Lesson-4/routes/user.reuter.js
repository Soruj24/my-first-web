const express = require('express');
const reuter = express.Router(); 

reuter.get("/about", (req, res) => {
    res.send("<h1>Hello About</h1>")
});
reuter.get("/login", (req, res) => {
    res.send("<h1>Hello Login</h1>")
});
reuter.get("/", (req, res) => {
    res.send("<h1>Hello Word</h1>")
});



module.exports = reuter;
