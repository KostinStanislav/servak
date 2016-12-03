var http = require('http');
var hostname = process.argv[5];
var port =process.argv[3];
if(!port||!hostname){
  hostname = '127.3.3.3';
     port = 3000; 
}


var server = http.createServer((req, res) => {
res.statusCode=200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});