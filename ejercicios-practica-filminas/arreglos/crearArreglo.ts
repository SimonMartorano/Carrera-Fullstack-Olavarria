/*
Crear arreglo

1) Crear un arreglo de letras e imprimirlo

2) Dado un array con nombres de tamaño 5, pedir
al usuario que ingrese un nombre y verificar si está
en el arreglo. Imprimir el arreglo y si está o no en
él.

*/
import * as rls from 'readline-sync';

let letras : string[] = ["h", "o", "l", "a"];

for (let i:number = 0; i < letras.length; i++){
    console.log(letras[i]);
}

let nombres : string[] = ["Jose", "Camila", "Fernanda", "Pedro", "German"];
let nombreIngresado : string = rls.question("Ingrese un nombre: ");
let nombreEncontrado : boolean = false;

for(let i:number = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

for(let i:number = 0; i < nombres.length; i++){
    if(nombres[i] == nombreIngresado){
        nombreEncontrado = true;
    }
}

if(nombreEncontrado){
    console.log("El nombre ingresado SE ENCUENTRA dentro del arreglo");
}else{
    console.log("El nombre ingresado NO SE ENCUENTRA dentro del arreglo");
}