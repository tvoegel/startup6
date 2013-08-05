var express = require('express');

var app = express.createServer(express.logger());
var fs=require("fs");
var text=fs.readFileSync("index.html","utf8");
//var buffer=new Buffer(Buffer.byteLength(text));
//var outstring=buffer.toString
app.get('/', function(request, response) {
  response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
