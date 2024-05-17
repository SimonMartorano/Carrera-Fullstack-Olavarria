/*

Tablas de Multiplicación

• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor

*/

import * as rls from 'readline-sync';

let numeroTabla : number = rls.questionInt("Ingrese un numero para saber su tabla de multiplicacion: ");
let numeroLimite : number = rls.questionInt("Hasta que numero quiere saber la tabla?: ");

if(numeroTabla < 1 || numeroLimite < 1){
    console.log("Por favor, ingrese numeros mayores a cero para ambos casos");
}else{
    for(let i:number = 1; i <= numeroLimite; i++){
        console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`);
    }
}



