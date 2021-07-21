const http = require('http');
const fs = require('fs');


const homeFile = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
    res.write(homeFile);
    res.end();
});

server.listen(3000, "127.0.0.1");