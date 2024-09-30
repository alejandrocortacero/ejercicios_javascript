/*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Puedes usar este array para probar tu función: */
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  const cuenta = {} // Crear un objeto para almacenar el conteo
  for (const palabra of param) {
    if (cuenta[palabra]) {
      cuenta[palabra]++
    } else {
      cuenta[palabra] = 1
    }
  }
  return cuenta
}
console.log(repeatCounter(counterWords))
