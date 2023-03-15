const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'
const mySever = http.createServer((req, res) => {
    res.end("Hello Server !")
});
mySever.listen(port, hostname, () => {
    console.log(`Server is Running at http://${hostname}:${port}`);
})