/*
Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
- La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
- 0, 1, 1, 2, 3, 5, 8, 13...
*/

function fibonacci() {

  let counter = 0;
  let number = 0;
  let numberNew = 0;

  while (counter <= 50) {

    let result = number + numberNew;

    numberNew = number;
    number = result;    
    console.log(result);
    
    if(result === 0) {
      numberNew++;
    }
    
    counter++;
  }
}

fibonacci();

//CÓDIGO DE CHATGPT → TENGO LA IDEA, ES MUY PARECIDO
/*
function fibonacci() {
  let counter = 0;
  let number = 0;
  let numberNew = 1;
  let result;

  while (counter < 50) { // Cambiamos la condición para que genere exactamente 50 números
    if (counter === 0) {
      console.log(number); // Imprimir el primer número de la sucesión
    } else if (counter === 1) {
      console.log(numberNew); // Imprimir el segundo número de la sucesión
    } else {
      result = number + numberNew;
      number = numberNew;
      numberNew = result;
      console.log(result);
    }
    counter++;
  }
}

fibonacci();
*/