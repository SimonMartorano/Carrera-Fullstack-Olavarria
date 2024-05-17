/*

Promedio-Máximo-Mínimo

• Diseñar un algoritmo que
lea números enteros hasta
teclear 0
• Determinar y mostrar el
máximo, el mínimo y la
media de todos los
números ingresados
• Pensar cuidadosamente
cómo debemos inicializar
las variables

*/

import * as rls from 'readline-sync';

let numero : number = rls.questionInt("Ingrese un numero entero (ingrese 0 para terminar): ");

//Por ahora el numero maximo y minimo es igual al unico numero ingresado por el usuario.
let numeroMaximo : number = numero;
let numeroMinimo : number = numero;

//Guardaremos cuantos numeros ingresa el usuario en total, y por otro lado, la suma de todos esos numeros.
let contadorDeNumeros : number = 0;
let sumaDeNumeros : number = 0;

while(numero != 0){

    if(numero > numeroMaximo){
        numeroMaximo = numero;
    }
    if(numero < numeroMinimo){
        numeroMinimo = numero;
    }

    //actualizamos las variables correspondientes.
    contadorDeNumeros++;
    sumaDeNumeros += numero;

    numero = rls.questionInt("Ingrese un numero entero: ");
}


console.log("El numero maximo es:", numeroMaximo);
console.log("El numero minimo es:", numeroMinimo);
console.log("El promedio de numeros es:", sumaDeNumeros / contadorDeNumeros);




