const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>')
});
router.get('/register', (req, res) => {
    res.send('<h1>About Page</h1>')
});
router.get('/login', (req, res) => {
    res.send('<h1>About Page</h1>')
});

module.exports = router;