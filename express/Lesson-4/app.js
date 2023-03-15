const express = require('express');
const app = express();
const userReuter = require('./routes/user.reuter')



app.use("/api/user", userReuter);


app.use("/register", (req, res) => {
    // res.status(200).json({
    //     "message": " i am Register Page",
        
    // });
    //   res.redirect('./login')
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/register.html")
});

app.use('/login', (req, res) => {
    res.send('<h1>I am Login Page</h1>')
    res.end();
    res.cookie('name','Soruj Mahmud')
    res.cookie('age','24')
});

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html")
});


app.use((req, res) => {
    res.send('<h1>404 page !!!</h1>')
});



module.exports = app;