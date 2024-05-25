/*

Invertir Arreglo

• Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del ultimo al primero

54

Ejemplo:

v = 1, 3, 7, 9, 9, 5
La salida es: 5, 9, 9, 7, 3, 1

*/

import * as rls from 'readline-sync';

let dimensionArreglo : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let arregloNumeros : number[] = new Array(dimensionArreglo); 

for(let i:number = 0; i < dimensionArreglo; i++){
    arregloNumeros[i] = rls.questionInt(`Ingrese el numero a introducir en la posicion ${i} del arreglo: `);
}

//Imprimir arreglo invertido por pantalla (No modifica el arreglo original).
// for(let i:number = dimensionArreglo - 1; i >= 0; i--){
//     console.log(arregloNumeros[i]);
// }


console.log("Arreglo original: ", arregloNumeros);

//Invertir el arreglo (Si modifica el arreglo original).
let inicio = 0;
let final = dimensionArreglo - 1;

while(inicio < final){
    let temp:number = arregloNumeros[inicio];
    arregloNumeros[inicio] = arregloNumeros[final];
    arregloNumeros[final] = temp;

    inicio++;
    final--;
}
    
console.log("Arreglo invertido: ", arregloNumeros);