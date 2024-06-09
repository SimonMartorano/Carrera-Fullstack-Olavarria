/*
    Ejercicio obligatorio
    entrega 14/06

Guarda la información de los siguientes arrays:

const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina",
"Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola.

*/

import fs from 'node:fs';

//Inicializacion de arreglos:
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];

//convertir arreglos en strings. (el metodo join por defecto separa los elementos por comas).
const preciosString:string = precios.join();
const productosString:string = productos.join();

//guardar el contenido de los strings en archivos .txt
fs.writeFileSync('./precios.txt', preciosString);
fs.writeFileSync('./productos.txt', productosString);

//recuperar el contenido de los archivos .txt en strings
const preciosTxt:string = fs.readFileSync("./precios.txt", "utf-8");
const productosTxt:string = fs.readFileSync("./productos.txt", "utf-8");

//convertir los strings a arreglo de strings:
const preciosArr:string[] = preciosTxt.split(",");
const productosArr:string[] = productosTxt.split(",");

//En el caso de los precios, convertir los stings a tipo numerico y guardarlos en un nuevo arreglo:
const preciosArrNum:number[] = new Array(preciosArr.length);

for(let i:number = 0; i < preciosArr.length; i++){
    preciosArrNum[i] = parseInt(preciosArr[i]);
}

//imprimir el resultado por pantalla:
console.log(preciosArrNum);
console.log(productosArr);