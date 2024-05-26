/*
Crea un programa que cuente cuantas veces se repite cada palabra
y que muestre el recuento final de todas ellas.
- Los signos de puntuación no forman parte de la palabra.
- Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
- No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
*/

const textString = "Avanzando, poco a poco: con los retos a cumplir.";

function countWords(text) {  

  // Reemplazar caracteres especiales por carácter vació.
  // Se pone en minúsculas todas las letras y separar palabras.
  let countText = text.replace(/[.,;:]/g, "").toLowerCase().split(" ");
  console.log(countText);  

  let countWord = {};

  countText.forEach(value => {
    if(countWord[value]) {
      countWord[value]++;      
    } else {
      countWord[value] = 1;
    }
  });

  for (let value in countWord) {
    console.log(`La palabra "${value}" está ${countWord[value]} ${countWord[value] > 1 ? "veces" : "vez"}`);
  };

  /*
  countWord = 0;

  countText.forEach(value => {
    countText.forEach(data => {
      if(value === data) {
        countWord++;      
      };
    });       
    console.log(`La palabra ${value} está ${countWord} ${countWord > 1 ? "veces" : "vez"}`);
    countWord = 0;    
  });
  */

};

countWords(textString);


