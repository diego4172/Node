const http = require('http');

const servidor = http.createServer((req,res)=>res.end('hola, Mundo'))

const PUERTO = 3000;

servidor.listen(PUERTO,()=>console.log(`el servidor está escuchando en el puerto ${PUERTO}...`));

