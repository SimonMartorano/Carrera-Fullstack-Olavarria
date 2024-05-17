/*

Calificaciones

Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)

*/

import * as rls from 'readline-sync';

    let nombreAlumno: string = "-1"
    let notaPractica : number;
    let notaProblemas : number;
    let notaTeorica : number;
    

while(nombreAlumno != ""){

    nombreAlumno = rls.question("Ingrese el nombre del alumno: ");
    if(nombreAlumno == ""){
        break;
    }

    notaPractica = rls.questionInt("Ingrese la nota practica: ");
    if(notaPractica < 0 || notaPractica > 10){
        console.log("Error: La nota ingresada debe estar entre 0 y 10");
        continue;
    } 
        
    notaProblemas = rls.questionInt("Ingrese la nota de problemas: ");
    if(notaProblemas < 0 || notaProblemas > 10){
        console.log("Error: La nota ingresada debe estar entre 0 y 10");
        continue;
    }
    
    notaTeorica = rls.questionInt("Ingrese la nota teorica: ");
    if(notaTeorica < 0 || notaTeorica > 10){
        console.log("Error: La nota ingresada debe estar entre 0 y 10");
        continue;
    }

    let resultado : number = (notaPractica * 0.1) + (notaProblemas * 0.5) + (notaTeorica * 0.4);

    console.log(`La nota del alumno ${nombreAlumno} es de ${resultado}`);
 
}









