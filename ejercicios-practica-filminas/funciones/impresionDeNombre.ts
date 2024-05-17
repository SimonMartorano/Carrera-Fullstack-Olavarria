import * as rls from 'readline-sync';

function dibujarGuiones(cantidad:number) : void{
    let guiones : string = "";

    for(let i : number = 0; i < cantidad; i++){
        guiones += "-";
    }

    console.log(guiones);
}

function imprimirNombre(nombre:string, apellido:string) : string{
    return(nombre + " " + apellido);
}

let nombre: string = rls.question("Ingrese un nombre: ");
let apellido: string = rls.question("Ingrese un apellido: ");

console.log(imprimirNombre(nombre, apellido));
dibujarGuiones(20);