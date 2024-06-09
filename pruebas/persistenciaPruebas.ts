import fs from 'node:fs';

// let contenido:number = 9;
// let contenidoString = contenido.toString();

/*---------------------------------*/

// let nombres:string[] = ['Carla', 'Marcos', 'Pedro'];
// let contenido:string = "";

// for(let i:number = 0; i < nombres.length; i++){
//     contenido += `${nombres[i]} `;
// }

/*-----------------------------*/
// fs.writeFileSync('./test.txt', contenido);

/*-------------------------------*/

const datos:string = fs.readFileSync("./test.txt", "utf-8");
const datosArr:string[] = datos.split(" ");

console.log(datosArr);



