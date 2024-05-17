/*

Suma entre Números

• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27

*/

import * as rls from 'readline-sync';

//Inicializar variables.
let numeroA : number = rls.questionInt("Ingrese un numero: ");
let numeroB : number = rls.questionInt("Ingrese otro numero: ");
let resultado : number = 0;

//Si el primer numero es mayor que el segundo, intercambiar sus valores.
if(numeroA > numeroB){
    let temp: number = numeroA;
    numeroA = numeroB;
    numeroB = temp;

}

//Sumar todos los numeros entre numero A y numero B
for(let i = numeroA; i <= numeroB; i++){
    resultado += i;
}

//Mostrar resultado
console.log(`La suma de todos los numeros entre ${numeroA} y ${numeroB} es de: ${resultado}`);
