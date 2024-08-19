/*
Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra
"JavaScript" en la matriz y devolver su posición como un array de dos elementos:
el índice de la fila y el índice de la columna.
*/

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position)

function findJavaScript(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'JavaScript'){
        return console.log([i, j])
      } 
    }
  }
  return [-1, -1];
}