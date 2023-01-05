const express = require("express")
const app = express()
const PORT = 3000;


app.get('/', (req, res) => {
    res.send('Hello  i am home page ');
});
app.post('/', (req, res) => {
    res.send('Hello  i am post page ');
});
app.put('/', (req, res) => {
    res.send('Hello  i am put page ');
});



app.listen(PORT, () => {
    console.log(`Server is Running at http://localhost:${PORT}`)
})