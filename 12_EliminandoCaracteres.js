/*
Crea una función que reciba dos cadenas como parámetro (str1, str2)
e imprima otras dos cadenas como salida (out1, out2).
- out1 contendrá todos los caracteres presentes en la str1 pero NO
  estén presentes en str2.
- out2 contendrá todos los caracteres presentes en la str2 pero NO
  estén presentes en str1.
 */

  const text1 = "Atletico Nacional el mas grande de Colombia de la historia del futbol"
  const text2 = "Atletico Nacional campeon copa libertadores 2016"

  function removingCharacters (text1, text2) {
    
    text1 = text1.toLowerCase()
    text2 = text2.toLowerCase()

    let noMatch1 = ""
    let noMatch2 = ""

    for (let char of text1) {
      if (!text2.includes(char)) {
        noMatch1 = noMatch1 + char
      }
    }

    for (let char of text2) {
      if (!text1.includes(char)) {
        noMatch2 = noMatch2 + char
      }
    }

    console.log(`Caracteres presentes en la cadena 1 pero no están presentes en la cadena 2 son: ${noMatch1}`);
    console.log(`Caracteres presentes en la cadena 2 pero no están presentes en la cadena 1 son: ${noMatch2}`);    

  }

  removingCharacters(text1, text2)