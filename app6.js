




/*

let hola =  [
    {inicio:1,final:2},
    {inicio:3,final:5},
    {inicio:4,final:6},
    {inicio:3,final:4},
    {inicio:3,final:5},
    {inicio:8,final:11},
    {inicio:10,final:12},
    {inicio:4,final:5},
    {inicio:0,final:2},
    {inicio:6,final:9},
    {inicio:11,final:12},
    {inicio:6,final:9},
]


let g = hola.filter(ele => ele.inicio <= 2 && ele.final >= 2 )

console.log(g);*/



let fecha = new Date();
var minutos = -60;
let fecha2 = new Date(fecha.getTime() + minutos*60000)
console.log(fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds())
console.log(fecha2.getHours()+":"+fecha2.getMinutes()+":"+fecha2.getSeconds())