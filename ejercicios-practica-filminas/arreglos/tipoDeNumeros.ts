/*

Tipos de Números en Arreglo

• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros

*/

import * as rls from 'readline-sync';


let dimensionArreglo : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let numeros : number[] = new Array(dimensionArreglo);

for(let i:number = 0; i < dimensionArreglo; i++){
    numeros[i] = rls.questionInt(`Ingrese el numero a introducir en la posicion ${i} del arreglo: `)
}

let contadorPositivos:number = 0; 
let contadorNegativos:number = 0;
let contadorCeros:number = 0;


for(let i:number = 0; i < dimensionArreglo; i++){
    if(numeros[i] > 0){
        contadorPositivos++;
    }else if(numeros[i] < 0){
        contadorNegativos++;
    }else{
        contadorCeros++;
    }
}

console.log(`${contadorPositivos} positivos, ${contadorNegativos} negativos, ${contadorCeros} ceros`);