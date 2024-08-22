/*
Escribe una función que calcule si un número dado es un número de Armstrong
(o también llamado narcisista).
*/

function armstrongNumber(number) {
  //Contar número de dígitos
  const power = number.toString().length;

  //Convertir números en texto, separar texto en array y regresar números a enteros.
  const individualNumber = number
    .toString()
    .split("")
    .map((num) => {
      return parseFloat(num, 10);
    });

  // Operación para saber si es un número Armstrong
  let accumulator = 0;
  for (let i = 0; i < power; i++) {
    accumulator += individualNumber[i] ** power;
  }

  const isArmstrongNumber =
    number === accumulator
      ? `El número ${number} es un número de Armstrong`
      : `El número ${number} no es un número de Armstrong`;

  console.log(isArmstrongNumber);
}

armstrongNumber(153); //Es Armstrong
armstrongNumber(-153); //No es Armstrong
armstrongNumber(8208); //Es Armstrong
armstrongNumber(54748); //Es Armstrong
armstrongNumber(15); //No es Armstrong