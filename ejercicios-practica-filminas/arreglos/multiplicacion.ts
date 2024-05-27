/*
.Multiplicacion

Implemente un método llamado “multiplicarArreglo” que recibe como parámetros tres arreglos de Enteros del mismo tamaño
Los dos primeros arreglos contienen los números que se quieren multiplicar
El tercer arreglo almacena el cálculo de la multiplicación de cada posición de los dos arreglos
Utilice este método para multiplicar los siguientes cuatro arreglos de tres elementos 

*/

function multiplicarArreglo(numerosA:number[], numerosB:number[], numerosResultado:number[]) : void{
    
    for(let i:number = 0; i < numerosA.length; i++){
        numerosResultado[i] = numerosA[i] * numerosB[i];
    }
    
}

//Definir arreglos:
let v1:number[] = [1, 2, 3];
let v2:number[] = [4, 5, 6];
let v3:number[] = [2, 1, 2];
let v4:number[] = [1, 2, 1];
let calculo:number[] = new Array(3);

multiplicarArreglo(v1,v2,calculo);

console.log(calculo);