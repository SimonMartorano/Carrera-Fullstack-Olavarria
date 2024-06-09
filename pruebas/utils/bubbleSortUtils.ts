function burbuja(num:number[], cantidad:number):void{

    for(let i:number = 1; i < cantidad; i++){

        for(let j:number = 0; j < cantidad - i; j++){

            if(compararValoresEnArreglo(num, j, j+1) === 1){
                intercambiarNumerosDeArreglo(num, j, j+1);
            }
        }
    }
}
 
 function cargarNumerosEnArreglo(arreglo:number[], cantidad:number, numAzar:number):void{

    for(let i:number = 0; i < cantidad; i++){
        arreglo[i] = generarNumeroAleatorio(numAzar);
    }
}

function generarNumeroAleatorio(numeroLimite:number) : number{
    //devuelve un numero aleatorio desde 0 al numero ingresado por parametro (incluidos)
    return Math.floor(Math.random() * (numeroLimite + 1));
}

function imprimirNumerosDeArreglo(numeros:number[], cantidad:number):void{
    
    let texto:string = "";

    for(let i:number = 0; i < cantidad; i++){
        texto += numeros[i] + " ";
    }

    console.log(texto);
}

function intercambiarNumerosDeArreglo(numeros:number[], i:number, j:number):void{
    let aux:number;

    aux = numeros[i];
    numeros[i] = numeros[j];
    numeros[j] = aux;
}

function compararValoresEnArreglo(numeros:number[], i:number, j:number) : number{
    
    if(numeros[i] > numeros[j]){
        return 1;
    }
    else if(numeros[i] < numeros[j]){
        return -1
    }
    else{
        return 0;
    }
}

export {cargarNumerosEnArreglo, generarNumeroAleatorio, imprimirNumerosDeArreglo, intercambiarNumerosDeArreglo, compararValoresEnArreglo, burbuja}

