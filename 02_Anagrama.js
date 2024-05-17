/*
Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
- Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
- NO hace falta comprobar que ambas palabras existan.
- Dos palabras exactamente iguales no son anagrama.
*/

//Carga el módulo 'prompt-sync' en Node.js
const prompt = require('prompt-sync')();

// Recibir datos
const word1 = prompt('Ingresa la primera palabra: ');
const word2 = prompt('Ingresa la segunda palabra: ');

function words(word1, word2) {  

  //Poner en minúsculas todas las letras
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  //Separar letras en una lista
  let list1 = word1.split("");
  let list2 = word2.split("");

  //Comparación de letras
  coincidence = []; //Acá se almacenan las coincidencias

  for (i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      coincidence.push(list1[i]);      
    };    
  }

  if(coincidence.length === list2.length) {
    console.log('Las palabras SON anagramas');
  }
  else{
    console.log('Las palabras NO son anagramas');
  }
}

words(word1, word2);

/*
FUNCIÓN POR CHATGPT

function areAnagrams(word1, word2) {
  // Poner en minúsculas todas las letras
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  // Comparar longitudes de las palabras
  if (word1.length !== word2.length) {
    return false;
  }

  // Separar letras en una lista y ordenar
  let sortedWord1 = word1.split("").sort().join("");
  let sortedWord2 = word2.split("").sort().join("");

  // Comparar las palabras ordenadas
  return sortedWord1 === sortedWord2;
}

if (areAnagrams(word1, word2)) {
  console.log('Las palabras SON anagramas');
} else {
  console.log('Las palabras NO son anagramas');
}
*/