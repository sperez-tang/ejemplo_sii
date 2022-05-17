const http = require('http');
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
  res.atusCode = 200;
  const msg = 'Hello Develop de sii!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
