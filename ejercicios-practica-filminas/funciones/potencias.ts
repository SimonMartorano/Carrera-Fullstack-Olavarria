/*

Ejercicio: Potencias

Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.

*/

import * as rls from 'readline-sync';

function potencia(base:number, exponente:number):number {
    let resultado = 1;

    for(let i = 0; i < exponente; i++){
        resultado = resultado * base; 
    }

    return resultado;
}

let base:number = rls.questionInt("Ingrese la base: ");
let exponente:number = rls.questionInt("Ingrese el exponente: ");


while(exponente < 0){
    exponente = rls.questionInt("El exponente debe ser mayor o igual a cero, vuelva a ingresarlo: ");
}

console.log(base, "elevado a", exponente, "es igual a: ", potencia(base, exponente));

