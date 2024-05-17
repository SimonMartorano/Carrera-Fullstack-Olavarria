import * as readlineSync from "readline-sync";

const alturaPersona = readlineSync.questionInt("ingrese la altura:");
console.log("la altura de la persona es: " , alturaPersona**2);