/*
var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-type':'text/plain'});
	response.end('Hello from node server!');
}).listen(1337, '127.0.0.1');

console.log('node web server started');
*/

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response){
	fs.readFile('index.html', function(err, data){
		response.writeHead(200, {'Content-type':'text/html'});
		response.end(data);
	});
	
}).listen(1337, '127.0.0.1');

console.log('node web server started');