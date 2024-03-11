const { info } = require('console');
const curso = require('./curso.json'); //se importa el json
console.log(curso); // se muestra todo el json
console.log(typeof curso); // javascript ;p detecta como objeto
console.log(curso.temas); // imprimo una variable del contenido del json 


let infoCurso = {
    "titulo":  "aprendiedo Node.js",
    "numeroVistas": 567834,
    "numLikes": 4523456,
    "temas":[
        "Javascript",
        "Node.js"
    ],
    "publico":true
};

// de javascript a json
console.log(infoCurso);
console.log(typeof infoCurso);


// cadena dee caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);


// cadena de caracteres a un objeto de javascript

let infoCursoObjeto = JSON.parse(infoCursoJSON); // convierte la cadena de caracteres a un objeto
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);