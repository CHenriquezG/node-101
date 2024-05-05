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
 
modulo fs : file system
 */

const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs');
const { resolve } = require('path');
/** 
fs.readFile('inde.html','utf-8',(err,contenido) => { // lee un archivo
    if(err){
        console.log(err);
        throw err;
    }else{
        console.log(contenido);
    }
});
*/

/** 
fs.rename('index.html','main.html',(err) =>{ // cambia el nombre
    if(err){
        throw err;
    }else{
        console.log('nombre cambiado exitosdamente');
    }
});
*/
/** 
fs.appendFile('index.html','\n<p>agregado<p>',(err)=>{ // agrega datos
    if(err){
        throw err;
    }else{
        console.log('cambio exitoso');
    }
});
*/

fs.writeFile('index.html','<h1>remplazo<h1>',(err)=>{ // escribe 
    if(err){
        throw err;
    }else{
        console.log('reemplazo exitoso');
    }
})

/** 
fs.unlink('index.html',(err)=>{ // elimina un archivo 
    if(err){
        throw err;
    }else{
        console.log('archivo eliminado');
    }
})

// puedes colocar Sync en las funciones paar convertirlos en sincronas  
*/

// introduccion a npm: archivos que contiene paquetes que puedes instalar y usar en node
// paquete = package.json - archivo o directorio que esta publicado en npm y describe 
// modulo = cualquier archivono directorio en node_modules que pueded ser imporytado con requiere()
// dependencia = es un paquete que depende de otro paquete/modulo




// json = formato de texto usado para almacenar y transportar datos


// eventos = realiza una accion
// asincrono = proceso en paralelo
// sincrono = proceso secuencial

// modedlo vista conterolador
// emitters (emisor) = emite un evento nombradosy llaman a funciones especificas cuando ocurre (eventEmitter)
// se denomina Event Handler para manejo de evento 
// el modulo event permite definir,emitir o escuchar eventos


//const EventEmitter = require('events');
//console.log(EventEmitter);


//const emisorProductos= new EventEmitter(); 

//emisorProductos.on('compra',()=>{
//    console.log('se realizo una compra');
//});
//emisorProductos.on('carrito',(nombre)=>{
//    console.log('se anadio al carrito el producto '+nombre );
//});


//emisorProductos.emit('compra');
//emisorProductos.emit('carrito','silla');

// promesa 
/**

const promesaCumplida = false;

const miPromesa = new Promise((resolve,rejects)=> {
    setTimeout(()=>{
        if(promesaCumplida){
            resolve('Promesa Cumplida');
        }else{
            rejects('Promesa rechazada...');
        }
    },3000);
});
*/
//miPromesa.then((valor) =>{
//    console.log(valor);
//});

/** 
const manejarPromesaCumplida = (valor) =>{
    console.log(valor);
}
const manejarPromesaRechazo = (razonRechazo) => {
    console.log(razonRechazo);
}

miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazo);

*/



function ordenarProducto(producto,segundos){
    return new Promise((resolve,reject) => {
        console.log(`solicitando: ${producto} de claudio`);
        setTimeout(()=>{
            if(producto === 'taza'){
                resolve('ordenando una taza de claudio');
            }else{
                reject('producto no disponible');
            }
        },segundos)
    });
}

function procesarPedido(respuesta){
    return new Promise((resolve)=>{
        console.log('procesando respuesta');
        console.log(`La respuesta fue: ${respuesta}`);
        setTimeout(()=>{
            resolve('gracias por tu compra');
        })
    },4000);
};
/** 
ordenarProducto('taza')
.then(respuesta =>{
    console.log('respuesta recibida');
    console.log(respuesta);
    return procesarPedido(respuesta);
})
.then(respuestaProcesada =>{
    console.log(respuestaProcesada);
})
.catch(error => {
    console.log(error);
});

*/
// codigo equivalente de arriba 

async function realizarPedido(producto,segundos){
    try{
    const respuesta = await ordenarProducto(producto,segundos);
    console.log('respuesta recibida');
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
    } catch(error){
        console.log(error);  
    }
}
let fecha =new Date();
console.log(fecha);

var dd = String(fecha.getDate()).padStart(2, '0');
var mm = String(fecha.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = fecha.getFullYear();

fecha = mm + '/' + dd + '/' + yyyy;





//realizarPedido('taza',1000);

//realizarPedido('taza',5000);

//realizarPedido('taza',7000);

//realizarPedido('taza',3000);

/** 
console.log(process.env.TZ);
process.env.TZ = 'America/Santiago'; // se define la zona horaria en chile





async function monitorearHorario(){
    try{
        var hora = new Date();
        console.log(hora.getHours()+":"+hora.getMinutes());
        // consultar bloque en que esta y se descontaria la hora en que esta 
        var horaespera = 360*1000; 

        while(conectado){
            const respuesta = await procesarHora(horaespera);
            console.log(respuesta);
            hora = new Date();
            console.log(hora.getHours()+":"+hora.getMinutes());



        }

    }catch(error){

    }

};

conectado = true;
function procesarHora(segundos){
    return new Promise((resolve,reject) => {
        console.log(`iniciado nuevo ciclo de 1 hora`);
        setTimeout(()=>{
            console.log(`solicitando entrada a la BD`);
            if(conectado == true){
                resolve('cerrando los horarios');
            }else{
                reject('no se puede conectar a la BD');
            }
        },segundos)
    });
}


//monitorearHorario();

const cursolocal = [];
const curso = require('./curso.json'); //se importa el json

let hola = {
    "titulo":  "aprendiedo React.js",
    "numeroVistas": 567834,
    "numLikes": 4523456,
    "temas":[
        "Javascript",
        "Node.js"
    ],
    "publico":true
}


console.log(cursolocal);
cursolocal.push(hola);
console.log(cursolocal);*/