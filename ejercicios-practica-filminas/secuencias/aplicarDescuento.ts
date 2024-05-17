/*

Ejercicio – Aplicar Descuento

•Desarrolle un algoritmo que diga el precio de
una compra
• La compra se compone del precio del producto
y la cantidad
•Si el cliente gasta más de $1000 debemos
aplicarle un descuento del 10%

*/

import * as rls from 'readline-sync';

let precioProducto : number = rls.questionInt("Introduzca el precio del producto: ");
let cantidadProducto : number = rls.questionInt("Introduzca la cantidad que desea comprar: ");

let precioTotalCompra : number = precioProducto * cantidadProducto;

if (precioTotalCompra > 1000){
    console.log("Usted ha gastado $", precioTotalCompra);
    console.log("por gastar mas de $1000, se le aplicara un 10% de descuento");
    console.log("El total a pagar es de: $", precioTotalCompra - (precioTotalCompra * 0.1));
}
else {
    console.log("El total a pagar es de: $", precioTotalCompra);
}