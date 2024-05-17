let pasos : string[] = [
    "Precalienta el horno a 180°C (350°F) y engrasa un molde para hornear cuadrado de aproximadamente 20x20 cm.",
    "En un recipiente resistente al calor, derrite el chocolate y la mantequilla a baño maría o en el microondas, revolviendo ocasionalmente hasta que estén suaves y bien combinados. Déjalo enfriar un poco.",
    "En otro recipiente, bate los huevos y el azúcar hasta que estén bien mezclados y espumosos.",
    "Agrega la esencia de vainilla a la mezcla de huevo y azúcar, y continúa batiendo hasta que esté bien incorporada.",
    "Vierte lentamente la mezcla de chocolate y mantequilla derretida en la mezcla de huevo, mezclando constantemente hasta que estén completamente combinadas.",
    "Tamiza la harina y la sal sobre la mezcla de chocolate y huevo, y mezcla suavemente hasta que la harina esté incorporada. Si estás usando nueces, agrégalas en este punto y mezcla nuevamente.",
    "Vierte la masa en el molde preparado y extiéndela de manera uniforme con una espátula.",
    "Hornea en el horno precalentado durante aproximadamente 25-30 minutos, o hasta que un palillo insertado en el centro salga con algunas migajas húmedas adheridas. No hornees en exceso para evitar que los brownies queden secos.",
    "Una vez horneados, retira del horno y deja que los brownies se enfríen completamente en el molde sobre una rejilla.",
    "Cuando los brownies estén completamente fríos, córtalos en cuadrados del tamaño deseado y sírvelos. ¡Disfruta de tus deliciosos brownies!"
];


console.log(`\nReceta para preparar brownies  :)

Ingredientes:

* 200g de chocolate semi-amargo
* 150g de mantequilla
* 200g de azúcar
* 3 huevos
* 1 cucharadita de esencia de vainilla
* 100g de harina
* 1/2 cucharadita de sal
* 100g de nueces picadas (opcional)

`);

console.log("Pasos:");

for(let i = 0; i < pasos.length; i++){
    console.log(`${i+1}: ${pasos[i]}`);
}
