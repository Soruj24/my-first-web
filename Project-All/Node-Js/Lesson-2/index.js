const http = require('http');
const PORT = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => {
    res.writeHead(202, { 'Content-Type': 'text/html' })
    res.write('<h1>Hello Word Soruj Mahmud</h1>');
    res.end();
});

myServer.listen(PORT, hostname, () => {
    console.log(`Server is Running at http://${hostname}:${PORT}`);
});