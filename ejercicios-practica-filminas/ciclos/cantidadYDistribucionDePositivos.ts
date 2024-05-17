/*

Cantidad y Distribución de Positivos

• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total

*/

import * as rls from 'readline-sync';

let numero : number = -1;
let cantidadDeNumeros : number = 0;
let cantidadDePositivos : number = 0;

while(numero != 0){
    numero= rls.questionFloat("Introduzca un numero: ");

    if(numero != 0){
        cantidadDeNumeros++;
    }
    
    if(numero > 0){
        cantidadDePositivos++
    }
}

let porcentaje : number = Math.round((cantidadDePositivos / cantidadDeNumeros) * 100);

console.log("Cantidad de numeros ingresados: ", cantidadDeNumeros);
console.log("Cantidad de numeros positivos ingresados:", cantidadDePositivos);
console.log("Porcentaje de positivos respecto del total:",porcentaje,"%");

