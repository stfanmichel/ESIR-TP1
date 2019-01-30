/*
    Page web : Hello World
    Inspîré de https://howtonode.org/hello-node
*/

const http = require('http')

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<html><body>Hello <b>ESIR</b></body></html>\n")
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000)

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");