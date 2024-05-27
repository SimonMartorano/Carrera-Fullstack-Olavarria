/*

Ejercicio: Convertir una arregloPalabra ingresada por el usuario en clave, según las reglas siguientes:
- Si el caracter es una vocal reemplazar aeiou por . , ; : !  respectivamente.
- Si el caracter es un número o un operador matemático (+ - * / ) queda igual.
- Si el caracter es una consonante minúscula pasar a mayúscula y viceversa.

Ejemplo:
MarcelO3980 = m.RC,Lo3980

*/

import * as rls from 'readline-sync';

function codificarPalabra(palabra:string):string{

    let vocales:string[] = ["a", "e", "i", "o", "u"];
    let codigoVocales:string[] = [".", ",", ";", ":", "!"];
    let arregloPalabra:string[] = palabra.split("");

    for(let i:number = 0; i < arregloPalabra.length; i++){

        let indiceDeVocal = vocales.indexOf(arregloPalabra[i]);

        //si la letra actual es una vocal, codificarla al simbolo correspondiente.
        if(indiceDeVocal != -1){
            arregloPalabra[i] = codigoVocales[indiceDeVocal];
        }
 
        else if(arregloPalabra[i] > "a" && arregloPalabra[i] < "z"){
            arregloPalabra[i] = arregloPalabra[i].toUpperCase();
        }
        
        else if(arregloPalabra[i] > "A" && arregloPalabra[i] < "Z"){
            arregloPalabra[i] = arregloPalabra[i].toLowerCase();
    }
}

    return arregloPalabra.join("");
}


let arregloPalabra:string = rls.question("Ingrese una arregloPalabra para codificarla: ");
console.log(`La arregloPalabra ${arregloPalabra} codificada es: ${codificarPalabra(arregloPalabra)}`)

