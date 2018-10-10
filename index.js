const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// var http = require('http');

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello World!");

// });
app.use(express.static('client/build'))
app.get('*', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!");
    // res.sendFile('client/build/index.html');
})
app.listen(port);

console.log("Server running at http://localhost:%d", port);
