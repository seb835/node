var http = require('http');
var uc = require('upper-case');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(uc('Hello World!'));
}).listen(8080);
