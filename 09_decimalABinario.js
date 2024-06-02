/*
Crea un programa se encargue de transformar un número
decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
*/

const decimal = 103;

function convertBinary(decimal) {

  let number = decimal;
  let result = "";

  if (decimal == 0){
    console.log(`El numero ${decimal} convertido en binario es: 0000`);
  } else {
    while (decimal != 0) {
      let residualNumber = decimal % 2;
      decimal = Math.floor(decimal / 2);
      result = `${residualNumber}${result}`;
    };

    console.log(`El numero ${number} convertido en binario es: ${result}`);
  };  
};

convertBinary(decimal);