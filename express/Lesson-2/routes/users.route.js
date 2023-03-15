const express = require('express');
const router = express.Router();



router.get('/about', (req, res) => {
    res.send('<h1>Hello About Page </h1>');
    res.end();
})
router.get('/register', (req, res) => {
    res.send('<h1>Hello register Page </h1>');
    res.end();
})

router.get('/login', (req, res) => {
    res.send('<h1>Hello Login Page </h1>');
    res.end();
})

module.exports = router;