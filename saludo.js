saludar = "claudio";

function saludarHolaMundo(nombre){
    return `hola, ${nombre}`;
}
//console.log(saludarHolaMundo(saludar));



module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};