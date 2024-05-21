/*
Crea una única función (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
- La función recibirá por parámetro sólo UN polígono a la vez.
- Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
- Imprime el cálculo del área de un polígono de cada tipo.
*/

const prompt = require('prompt-sync')();

function areaPolygon() {

  let triangleBase = prompt('Ingrese la base del triangulo: ');
  let triangleHeight = prompt('Ingrese la altura del triangulo: ');
  let squareSide = prompt('Ingrese el lado de un cuadrado: ');
  let rectangleLong = prompt('Ingrese el largo del rectángulo: ');
  let rectangleWidth = prompt('Ingrese el ancho del rectángulo: ');

  console.log(`El área del triangulo es: ${(triangleBase * triangleHeight) / 2}`);
  console.log(`El area del cuadrado es: ${squareSide * squareSide}`);
  console.log(`El área del rectángulo es: ${rectangleLong * rectangleWidth}`);

}

areaPolygon();
