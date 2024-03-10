//const saludo = require('./saludo.js');
//ejemplo
//console.log(saludo.saludar);
//console.log(saludo.saludarHolaMundo('jose'));


// desestructurar
//ejemplo
//const {saludarHolaMundo,saludar} = require('./saludo.js')
//console.log(saludarHolaMundo('jose')+" g");
//console.log(saludar);


// modulos built in - modulo que se puede trabajar directamente con node.js
// http,http, fs, os, path
//ejemplo console.log 

//console.error('ERROR');
//console.error(new Error('ocurrio un error'));



// modulo process; nos provee informacion de cierto control 
//console.log(process.env);
//console.log(process.argv[1]); // argumento en node app.js
//console.log(process.memoryUsage);
//process.argv.forEach(element => {
//    console.log(element);
//});


// modulo os

//const os = require('os');
//console.log(os.type()); // Windows_NT
//console.log(os.homedir()); // directorio principal 
//console.log(os.uptime()); // numero de seegundos transcurridos durante el inicio del pc
//console.log(os.userInfo()); // informacion del usuario

// modulo timer: operaciones asincronas



//var num = 0;

//function mostrarNombre(nombre){
//    console.log(`mi nombre es ${nombre}`);
//}
//function sumar(n1,n2){
//    console.log(n1+n2);
//}
//function sumarv2(n1,n2){
//    num = n1 + n2;
//    console.log(num);
//}
//mostrarNombre('vlaudio 2');

//setTimeout(mostrarNombre,5000,'vlaudio 1');// espera por milisegundos
//setTimeout(sumar,1000,1,3);


//console.log('antes');
//setImmediate(sumar,1,1); // se ejecuta despues de hacer el codigo asincrono
//console.log('despues');


//setInterval(sumarv2,2000,num,1); // ejecuta un numro infinito de veces por un periodo de tiempo


/**
 
modulo fs
 */





