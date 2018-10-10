var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// var http = require('http');

// var server = http.createServer(function(request, response) {

//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("Hello New World!");

// });

// server.listen(port);

// app.use(express.static('client/build'));
app.get('*', (req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Another World!");
    // res.sendFile('client/build/index.html');
})
app.listen(port);

console.log("Server running at http://localhost:%d", port);
