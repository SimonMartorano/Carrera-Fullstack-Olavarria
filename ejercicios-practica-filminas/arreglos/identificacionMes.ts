import * as rls from 'readline-sync';

let arregloMeses : string[] = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
let opcion : number = rls.questionInt("Ingrese el numero de mes: ");

if(opcion >= 1 && opcion <=12){
    console.log(arregloMeses[opcion-1]);
}else{
    console.log("Ingrese un numero de mes valido");
}