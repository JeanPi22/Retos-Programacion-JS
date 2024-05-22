/*
Crea un programa que invierta el orden de una cadena de texto
sin usar funciones propias del lenguaje que lo hagan de forma automática.
- Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
*/

const prompt = require('prompt-sync')();
const text = prompt('Ingresa texto: ');

function reverse(text) {

  let reverseText = ""; // Almacenar caracteres invertidos

  // Recorremos la cadena de texto de atrás hacia adelante.
  for (let i = text.length -1; i >= 0; i--) {   
    //Se va concatenando cada carácter en orden de recorrido.
    reverseText += text[i];
  };

  console.log(reverseText);
}

reverse(text);