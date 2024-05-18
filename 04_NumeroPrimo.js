/*
Escribe un programa que se encargue de comprobar si un número es o no primo.
Hecho esto, imprime los números primos entre 1 y 100.
*/

function esPrime(number) {

  // Aseguramos que el número 2 es un número primo
  if (number === 2) {
    return true;
  };

  // Iteramos el valor con el cual se debe dividir cada número,
  for(let i = 2; i < number; i++) {
    // Verificando si tiene más de 2 divisores.
    if(number % i === 0) {
      return false;
    }
  }

  return true;
};

function prime(num) {
  for(let i = 2; i <= num; i++) {
    if(esPrime(i)) {
      console.log(i + ' Es un número primo');
    };
  };
};

prime(100);