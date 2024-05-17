/*

Encontrar el Número Máximo

• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo

*/

import * as rls from 'readline-sync';

//descripcion del programa.
console.log("Este programa le permite ingresar varios numeros para encontrar el numero mas alto, para terminar el programa ingrese el numero 0");

//pedirle al usuario un numero.
let numeroIngresado : number = rls.questionInt("Ingrese un numero: ");

//por el momento, el numero mas alto es el unico numero introducido.
let numeroMasAlto : number = numeroIngresado;

//mientras el numero ingresado sea distinto de 0:
while(numeroIngresado != 0){
    //seguir pidiendole numeros al usuario
    numeroIngresado = rls.questionInt("Ingrese un numero: ");

    //si el nuevo numero introducido es mas grande que el numero mas alto, actualizar el numero mas alto con este nuevo valor.
    //tambien chequear que el numero ingresado no sea 0 (sino causa errores cuando todos los numeros ingresados son negativos).
    if(numeroIngresado > numeroMasAlto && numeroIngresado != 0){
        numeroMasAlto = numeroIngresado;
    }
}

//imprimir por pantalla el numero mas alto que se ha guardado hasta ahora.
console.log("El numero mas alto que se introdujo fue: ", numeroMasAlto);

