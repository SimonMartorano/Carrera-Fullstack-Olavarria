/*

Ejercicio - Login

• Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan

*/

import * as rls from 'readline-sync';

const USUARIO : string = "Juan";
const CLAVE : string = "claveJuan";

let usuario : string = rls.question("Introduzca su nombre de usuario: ");
let clave : string = rls.question("Introduzca su clave: ");

if(usuario == USUARIO && clave == CLAVE){
    console.log("Te has logeado con exito");
}
else{
    console.log("Algunos de los datos ingresados son incorrectos");
}
