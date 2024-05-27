/*
.Cine

Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay 
Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada

*/

let butacas:boolean[] = [true, false, false, true, false, true, true, true, false, true];
let butacasDesocupadas:number = 0;

for(let i:number = 0; i < butacas.length; i++){
    if(butacas[i] === false){
        butacasDesocupadas++;
    }
}

console.log(`En el cine hay ${butacasDesocupadas} butacas desocupadas`);