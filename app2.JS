const http = require('http');


const servidor = http.createServer((req,res)=>{
    //console.log(req.method);
    //console.log(req.headers);

    console.log(res.statusCode);
    res.statusCode = 404; // 404 not found
    console.log(res.statusCode);
    


    res.setHeader('content-type','application/json');
    console.log(res.getHeaders());
    res.end('hola');
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log("hola");
});



