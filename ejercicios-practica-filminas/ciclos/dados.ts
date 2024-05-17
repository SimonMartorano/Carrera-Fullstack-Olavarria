/*

Dados

Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
Al aumentar el numero de dados la probabilidad de sacar todos 6 es cada vez menor
Escriba un programa que calcule la probabilidad de sacar todos los dados 6 siendo que tiramos N dados (dato ingresado por le usuario)

*/

import * as rls from 'readline-sync';

let cantidadDeDados : number = rls.questionInt("Ingrese la cantidad de dados que se van a tirar: ");
let probabilidad : number = 1;

for(let i : number = 1; i <= cantidadDeDados; i++){
    probabilidad *= 6;
}

console.log(`Tirando ${cantidadDeDados} dado/s, la probabilidad de sacar todos 6 es de: 1/${probabilidad}`);

