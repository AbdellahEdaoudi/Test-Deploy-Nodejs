const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status for success
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

// Define the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
