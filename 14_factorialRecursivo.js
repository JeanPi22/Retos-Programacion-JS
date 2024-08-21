/*
Escribe una función que calcule y retorne el factorial de un número dado
en forma recursiva.
*/

function factorial (number) {
  let accumulator = 1
  for (let i = number ; i > 1 ; i--) {
    accumulator = accumulator * i    
  }
  return `Número factorial de ${number} = ${accumulator}`
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));