import * as rls from 'readline-sync';

function esMultiplo(dividendo:number, divisor:number) : boolean {
    if(dividendo % divisor == 0){
        return true;
    }

    return false;
}

function cantidadDeDivisores(numero:number) : number {
    let conteoDeDivisores : number = 0;

    for(let i:number = 1; i <= numero; i++){
        if(esMultiplo(numero, i)){
            conteoDeDivisores++;
        }
    }

    return conteoDeDivisores;
}

let num : number = rls.questionInt("Ingrese un numero entero: ");

console.log(`El numero ${num} tiene ${cantidadDeDivisores(num)} divisores`);