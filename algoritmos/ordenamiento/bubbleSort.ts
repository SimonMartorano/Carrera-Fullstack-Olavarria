/*
    Implemente un algoritmo de ordenamiento con el método Bubble Sort, para que ordene un arreglo de longitud N en orden descendente. 

*/
let arrNumeros:number[] = [2, 8, 4, 6, 9, 5, 7, 3, 1];
let huboBurbujeo:boolean;
let limite = 1;

do{
    huboBurbujeo = false;

    for(let i:number = 0; i < arrNumeros.length - limite; i++){

        if(arrNumeros[i] < arrNumeros[i+1]){
            
            let auxiliar = arrNumeros[i];
            arrNumeros[i] = arrNumeros[i+1];
            arrNumeros[i+1] = auxiliar;

            huboBurbujeo = true;
        }
    }

    limite++;
}while(huboBurbujeo);

console.log("Arreglo ordenado (descendente): " + arrNumeros);


