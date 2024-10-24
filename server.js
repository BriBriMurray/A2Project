const http = require('http');

let addr = 'http://localhost:8080/default.html?year=2017&month=february';

let q = new URL(addr,  'http://localhost:8080');

if (q.pathname.includes('documentation')) {
  filePath = (__dirname + '/documentation.html');
} else {
  filePath = 'index.html';
}

fs.readFile(filePath, (err, data) => {
  if (err) {
    throw err;
  }

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(data);
  response.end();

});

listen(8080);
console.log('My test server is running on Port 8080.');



console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.html'
console.log(q.search); // returns '?year=2017&month=february'

let qdata = q.query; // returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); // returns 'february'
;

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello Node!\n');
}).listen(8080);

console.log('My first Node test server is running on Port 8080.');