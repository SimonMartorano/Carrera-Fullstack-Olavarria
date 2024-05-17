/*

Ejercicio – Validar Altura

•Desarrolle un algoritmo que, de acuerdo a la
altura de una persona, decida si puede entrar a
un juego en un parque de diversiones
•Para poder subirse a la montaña rusa la
persona debe medir 1.30 mts. o más

*/

import * as rls from 'readline-sync';

let altura : number = rls.questionFloat("Introduzca su altura: ");

if(altura >= 1.30){
    console.log("Puedes subir a la montaña rusa");
}
else {
    console.log("No puedes subir a la montaña rusa");
}