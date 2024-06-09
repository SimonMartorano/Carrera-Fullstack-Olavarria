/*
    Implemente un algoritmo de ordenamiento con el método Bubble Sort, para que ordene un arreglo de longitud N en orden descendente. 

*/

//////////////////////////////////////////////////////////////////////////////

//FUNCIONES//

// Intercambia los valores de dos posiciones en el arreglo. (modifica el arreglo original).
function intercambiar(arreglo:number[], poisicionA:number, posicionB:number) : void{

    let auxiliar = arreglo[poisicionA];
    arreglo[poisicionA] = arreglo[posicionB];
    arreglo[posicionB] = auxiliar;

}

//Ordena los elementos de un arreglo de manera descendente. (modifica el arreglo original).
function burbujeoDescendente(arreglo:number[]) : void{

    let huboBurbujeo:boolean;
    let limite = 1; 

    do{
        huboBurbujeo = false;
        
        //Recorremos el arreglo
        for(let i:number = 0; i < arrNumeros.length - limite; i++){
    
            //Si el numero en la posicion actual es menor al de la posicion siguiente:
            if(arrNumeros[i] < arrNumeros[i+1]){
                //intercambiar sus valores
                intercambiar(arrNumeros, i, i+1);
    
                //avisarle al programa que se realizo un burbujeo.
                huboBurbujeo = true;
            }
        }
        
        /*Los numeros mas pequeños se van ubicando al final del arreglo. Cambiamos el limite cada vez,
         para no volver a comparar los elementos ya ordenados*/
        limite++; 

    }while(huboBurbujeo); /* Mientras se haya realizado un burbujeo se seguira iterando. 
                            Si no se hizo burbujeo es porque el arreglo esta ordenado y se finalizara el ciclo*/
}

//Imprime el arreglo en una unica linea de tipo string.
function imprimirArreglo(arreglo:number[]) : void{
    
    let texto:string = "";

    for(let i:number = 0; i < arreglo.length; i++){
        texto += `${arreglo[i]} `;
    }

    console.log(texto);
}

/////////////////////////////////////////////////////////////////////////////

//PROGRAMA//

let arrNumeros:number[] = [2, 8, 4, 6, 9, 5, 7, 3, 1];

console.log("El arreglo original es: ");
imprimirArreglo(arrNumeros);

console.log("Realizando burbujeo...");
burbujeoDescendente(arrNumeros);

console.log("El arreglo ordenado de manera descendente es: ");
imprimirArreglo(arrNumeros);



