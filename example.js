var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to the fabric8 Nodejs pipeline test app');
}).listen(8080);
console.log('Server running at http://localhost:8080/');
