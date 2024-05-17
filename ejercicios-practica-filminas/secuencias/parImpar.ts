/*

Ejercicio – Par/Impar

•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo

*/


import * as rls from 'readline-sync';

let numero : number = rls.questionInt("Ingrese un numero: ");

if(numero == 0){
    console.log("ha ingresado el numero 0");
}
else if(numero % 2 == 0){
    console.log("el numero", numero, "es par");
}
else {
    console.log("el numero", numero, "es impar");
}


/*

Pseudocodigo:
1- Pedir al usuario que ingrese un número.
2- Si el número es igual a 0, informárselo al usuario.
3- Calcular el resto de: el número ingresado dividido dos. 
4- Si el resultado es 0, imprimir por pantalla que el número es par.
5- De lo contrario, imprimir por pantalla que el número es impar.

*/