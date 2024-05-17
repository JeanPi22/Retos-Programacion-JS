/*FizzBuzz:
Imprime los números del 1 al 100.
Para los múltiplos de 3, imprime "Fizz".
Para los múltiplos de 5, imprime "Buzz".
Para los múltiplos de ambos (3 y 5), imprime "FizzBuzz".*/

function printNumbers() {
    for (let i = 1; i <= 100; i++){
        multiplesThreeOrFive(i);
    }
}

function multiplesThreeOrFive(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');               
    } else if (number % 3 === 0) {
        console.log('Fizz');
    } else if (number % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(number)
    } 
}

printNumbers();