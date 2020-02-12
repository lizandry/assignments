const http = require('http')
var fs = require('fs');
const path = require('path');
const port = 3000
console.log(`website now running on port ${port}`)


const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})

// let http = require("http");
// let fs = require("fs");
// let server = http.createServer(function(req, res){
//     console.log("request was made: " + req.url);
//     if(req.url === "/home" || req.url === "/"){
//         res.writeHead(200, {"Content-Type": "text/html"});
//         fs.createReadStream(__Eventonica + "/index.html").pipe(res);
//     } else if(req.url === "/contact"){
//         res.writeHead(200, {"Content-Type": "text/html"});
//         fs.createReadStream(__Eventonica + "/contact.html").pipe(res);
//     }
// });
// server.listen(3000, "127.0.0.1");
// console.log("Listening to port 3000");