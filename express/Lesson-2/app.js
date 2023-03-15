const express = require('express');
const app = express();
const userRouter = require('./routes/users.route')

app.use('/api/user',userRouter);

app.get('/', (req, res) => {
    res.send('<h1>Hello Word </h1>');
    res.end();

});

app.use((req, res) => {
    res.send('<h1>Error Page 400 !!!</h1>')
    res.end();
})

module.exports = app;