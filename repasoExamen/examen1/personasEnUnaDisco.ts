// FUNCIONES //
function numeroAleatorioMinMax(menorValor:number, mayorValor:number):number{
    menorValor = Math.ceil(menorValor);
    mayorValor = Math.floor(mayorValor);
    return Math.floor(Math.random() * (mayorValor - menorValor + 1) + menorValor);
}

function cargarEdades(arreglo:number[] ,cantidad:number, min:number, max:number):void{
    for(let i:number = 0; i < cantidad; i++){
        arreglo[i] = numeroAleatorioMinMax(min, max);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////

//VARIABLES
const totalPersonas:number = 270;
let arrEdadesPersonas:number[] = new Array(totalPersonas);
let menoresDe21:number = 0;
let mayoresOIgualDe21:number = 0;

//LOGICA
cargarEdades(arrEdadesPersonas, totalPersonas, 18, 40);

for(let i:number = 0; i < totalPersonas; i++){
    if(arrEdadesPersonas[i] < 21){
        menoresDe21++;
    }else{
        mayoresOIgualDe21++;
    }
}

console.log(arrEdadesPersonas);
console.log(`En la disco hay ${menoresDe21} personas menores de 21 años y ${mayoresOIgualDe21} personas mayores o igual a 21 años.`);
console.log(`El total de personas es de ${totalPersonas}`);


