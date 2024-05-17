/*

Eureka

Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es
la palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa

*/

import * as rls from 'readline-sync';

//iniciacion de variables.
const claveCorrecta : string = 'eureka';
let claveUsuario : string = '';
const intentosMax : number = 3;
let intentosConteo : number = 0;

//Pedir al usuario la clave hasta que la escriba correctamente o alcance un maximo de 3 intentos.
while(intentosConteo < intentosMax && claveUsuario != claveCorrecta){
   claveUsuario = rls.question("Ingrese la clave: ");
   intentosConteo++;
}

if(claveUsuario == claveCorrecta){
    console.log("Has escrito la clave correctamente");
}
else{
    console.log("Te has quedado sin intentos");
}