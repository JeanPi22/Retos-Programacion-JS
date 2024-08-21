/*
Escribe una función que reciba un texto y retorne verdadero o
falso (Boolean) según sean o no palíndromos.
Un Palíndromo es una palabra o expresión que es igual si se lee
de izquierda a derecha que de derecha a izquierda.
NO se tienen en cuenta los espacios, signos de puntuación y tildes.
Ejemplo: Ana lleva al oso la avellana.
 */

function palindrome (phrase) {
  
  //Convertir texto en minúscula y quitar espacios.
  const separateChar = phrase.toLocaleLowerCase().replace(/ /g, "")

  //Invertir texto
  const phraseReverse = separateChar.split("").reverse().join("");
  
  //Verifico que sean iguales
  const isPalindrome = separateChar === phraseReverse
  return isPalindrome
  
}

console.log(palindrome('Yo hago yoga hoy'));
console.log(palindrome('Ana lleva al oso la avellana'));
console.log(palindrome('Esto no es un palíndromo'));