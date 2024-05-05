const http = require("http");
const curso = require("./curso.js");


const servidor = http.createServer((req,res) =>{
    const {method} = req;

    switch(method){
        case 'GET':
            return manejatSolicitudGET(req,res);
        default:
            console.log("no se pueded hacer eso jaja");
    }
});


function manejarSolicitudGET(req,res){
    let path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        res.end('bievenido a la pagina principal');
    }else if(path === '/cursos'){
        res.statusCode = 200;
        res.end(JSON.stringify(curso.infocurso));

    }

}

const puerto = 3000;


servidor.listen(puerto,()=>{
    console.log("hola");
})