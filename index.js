const http = require('http');
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hola Feature cambio idioma de sii!\n'
  const fr = 'Hola Feature cambio idioma de sii!\n'
  res.end(msg + " " + fr);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
