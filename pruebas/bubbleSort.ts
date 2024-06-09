import {cargarNumerosEnArreglo, imprimirNumerosDeArreglo, burbuja} from "./utils/bubbleSortUtils";

let dimensionArreglo = 10;
let numeros:number[] = new Array(dimensionArreglo);
cargarNumerosEnArreglo(numeros, dimensionArreglo, 15);

console.log("El arreglo original es: ");
imprimirNumerosDeArreglo(numeros, dimensionArreglo);

console.log("Aplicando el metodo burbuja...")
burbuja(numeros, dimensionArreglo);

console.log("El arreglo ordenado es: ")
imprimirNumerosDeArreglo(numeros, dimensionArreglo);


