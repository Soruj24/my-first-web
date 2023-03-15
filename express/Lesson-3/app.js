const express = require('express');
const app = express();
const userRouter = require('./routes/user.router')

app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello Home Page .</h1>')
})

app.use((req, res) => {
    res.send('<h1>Error Page 404 !!!</h1>')
})

module.exports = app;