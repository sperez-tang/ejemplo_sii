const http = require('http');
const port = process.env.PORT || 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hola Feature cambio idioma de sii!\n'
  const eng = 'Hello Feature language change!\n'  
  const prb = 'Prueba!\n'  
  res.end(msg + "" + eng + "" + prb);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
