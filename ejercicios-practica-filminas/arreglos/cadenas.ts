/*
.Cadenas

Solicite al usuario que ingrese un texto y retornelo convertido en un nombre de variable/función con las reglas camelCase

Por ejemplo, si el usuario ingresa:

    convertir texto segun camel case

el programa lo debe convertir en:

	convertirTextoSegunCamelCase

*/


import * as rls from 'readline-sync';

let texto:string = rls.question("Ingrese un texto para convertirlo a Camel Case: ");
texto = texto.trim();
let caracteres = texto.split("");


for(let i = 0; i < caracteres.length; i++){
    if(caracteres[i-1] === " "){
        caracteres[i] = caracteres[i].toUpperCase();
    }
}

let textoCamelCase:string = caracteres.join("").split(" ").join("");

console.log(textoCamelCase);






