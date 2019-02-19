const http = require('http');

const server = http.createServer((req, res) => {
  res.end('This is my first respond!');
});

server.listen(process.env.PORT || 3000);
