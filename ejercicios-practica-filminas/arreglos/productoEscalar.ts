import * as rls from 'readline-sync';

let dimensionArreglo:number = rls.questionInt("Ingrese la dimension de los arreglo: ");
let primerArreglo:number[] = new Array(dimensionArreglo);
let segundoArreglo:number[] = new Array(dimensionArreglo);

for(let i:number = 0; i < dimensionArreglo; i++){
    primerArreglo[i] = rls.questionInt(`Ingrese el numero a introducir en la posicion ${i} del primer arreglo: `);
}

for(let i:number = 0; i < dimensionArreglo; i++){
    segundoArreglo[i] = rls.questionInt(`Ingrese el numero a introducir en la posicion ${i} del segundo arreglo: `);
}

let acumulador:number = 0;
for(let i:number = 0; i < dimensionArreglo; i++){
    acumulador += primerArreglo[i] * segundoArreglo[i];
}

console.log(`El producto escalar entre los dos arreglos es de: ${acumulador}`);