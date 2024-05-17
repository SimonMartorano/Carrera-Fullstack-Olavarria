import * as rls from 'readline-sync';

function esMultiplo(dividendo:number, divisor:number) : boolean {
    if(dividendo % divisor == 0){
        return true;
    }

    return false;
}

let num1 : number = rls.questionInt("Ingrese el primer numero: ");
let num2: number = rls.questionInt("Ingrese el segundo numero: ");

if(esMultiplo(num1, num2)){
    console.log(`El numero ${num1} ES multiplo de ${num2}`);
}else{
    console.log(`El numero ${num1} NO es multiplo de ${num2}`);
}

