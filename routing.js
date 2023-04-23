const http = require('http');
const {infoCursos} = require('./cursos');


const servidor = http.createServer((req,res)=>{
    const {method} = req;
    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req,res);
        case 'POST':
            return manejarSolicitudPOST(req,res);
        default:
            res.statusCode = 501;
            res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
    }
})

const manejarSolicitudGET = (req,res) => {
    const path = req.url;
    if (path === '/') {
        res.statusCode = 200; // 200 es el código por defecto
        res.end('Bienvenido a mi primer servidor y API creado en NODE js - Hola Diego');
    }else if (path === '/cursos') {
        res.statusCode = 200; // 200 es el código por defecto
        res.end(JSON.stringify(infoCursos));
    }else if (path === '/cursos/programacion') {
        res.statusCode = 200; // 200 es el código por defecto
        res.end(JSON.stringify(infoCursos.programacion));
    }
    res.statusCode = 404;
    res.end('El recurso solicitado no existe....');
}

const manejarSolicitudPOST = (req,res) => {
    const path = req.url;
    if (path === '/cursos/programacion') {
        let cuerpo = '';
        req.on('data', contenido => cuerpo += contenido.toString());
        req.on('end', ()=>{
            cuerpo = JSON.parse(cuerpo);
            console.log(cuerpo);
            console.log(typeof cuerpo);
            res.end('El servidor  recibio una solicutud POST para /cursos/programacion');
        });
    }
}
const PUERTO = 3000;

servidor.listen(PUERTO,()=>console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`))