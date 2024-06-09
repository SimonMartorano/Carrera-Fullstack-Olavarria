//CONSIGNA//
// Pedir por consola 15 caracteres, imprimir la mayor cantidad de 'a' seguidas que se ingresaron //

//LIBRERIAS
import * as readline from 'readline-sync';

//FUNCIONES
function cargarCaracteres(arreglo:string[]):void{

    for(let i:number = 0; i < arreglo.length; i++){

        caracteres[i] = readline.question(`Ingrese el caracter en la posicion ${i} del arreglo: `);

        while(caracteres[i].length != 1){
            console.log("ERROR. Por favor asegurese de ingresar solo UN caracter");
            caracteres[i] = readline.question(`Ingrese el caracter en la posicion ${i} del arreglo: `);
        }
    }
}

//PROGRAMA

let caracteres:string[] = new Array(15);
cargarCaracteres(caracteres);

let aSeguidas:number = 0;
let mayorCantidadSeguidas = 0;

for(let i:number = 0; i < caracteres.length; i++){
    //Si el caracter actual es una a y el caracter anterior o posterior tambien lo es, aumentar el contador.
    if((caracteres[i] === "a" && caracteres[i-1] === "a") || (caracteres[i] === "a" && caracteres[i+1] === "a")){
        aSeguidas++;
    }
    else if(aSeguidas > mayorCantidadSeguidas){
        mayorCantidadSeguidas = aSeguidas;
        aSeguidas = 0;
    }
}

console.log(`La mayor cantidad de letras 'a' seguidas es de ${mayorCantidadSeguidas}`);

















