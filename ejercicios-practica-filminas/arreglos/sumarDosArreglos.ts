/*

Sumar Dos Arreglos

• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario

*/

import * as rls from 'readline-sync';

let arreglo1 : number[] = new Array(6);
let arreglo2 : number[] = new Array(6);
let sumaDeArreglos : number[] = new Array(6);

console.log("Ingrese seis numeros para el primer arreglo");
for(let i:number = 0; i < 6; i++){
    arreglo1[i] = rls.questionInt("Ingrese un numero: ");
}

console.log("Ahora ingrese seis numeros para el segundo arreglo");
for(let i:number = 0; i < 6; i++){
    arreglo2[i] = rls.questionInt("Ingrese un numero: ");
}

for(let i:number = 0; i < 6; i++){
    sumaDeArreglos[i] = arreglo1[i] + arreglo2[i];
}

console.log(arreglo1);
console.log(arreglo2);
console.log(sumaDeArreglos);