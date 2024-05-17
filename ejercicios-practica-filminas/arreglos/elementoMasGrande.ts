/*

Encontrar el elemento más grande del arreglo.

Dado el siguiente arreglo [4, 7, 9, 3, 1, 45, 67, 23, 29, 78 , 11, 16]
- Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola.
- Almacenar el número mús grande en una variable global y pasarlo a una función para determinar si el número es par o impar.

*/

function obtenerElMayorNumero(numeros:number[]) : number {
    //por el momento asignamos al primer elemento del array como el mayor numero.
    let mayorNumero : number = numeros[0];

    //comparamos desde el segundo elemento del array hasta el final.
    for(let i:number = 1; i < numeros.length; i++){

        //si el elemento actual es mas grande que mayorNumero, reemplazar el valor de mayorNumero por el elemento actual.
        if(numeros[i] > mayorNumero){
            mayorNumero = numeros[i];
        }
    }

    return mayorNumero
} 

function esPar(numero:number) : boolean {
    return numero % 2 == 0;
}


let numeros : number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78 , 11, 16];
let MAYOR_NUMERO : number = obtenerElMayorNumero(numeros);

if(esPar(MAYOR_NUMERO)){
    console.log(`El numero mas grande es el ${MAYOR_NUMERO} y es un numero par.`);
}else if(!esPar(MAYOR_NUMERO)){
    console.log(`El numero mas grande es el ${MAYOR_NUMERO} y es un numero impar.`);
}




