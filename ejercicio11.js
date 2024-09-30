/*Calcular promedio de strings:
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
Puedes usar este array para probar tu función: pista (typeof) */
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
function averageWord(param) {
  let suma = 0
  for (indice = 0; indice < param.length; indice++) {
    if (typeof param[indice] === 'number') {
      suma += param[indice]
    } else {
      suma = suma + param[indice].length
    }
  }
  return suma
}
console.log(averageWord(mixedElements))
