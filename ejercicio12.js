/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para
probar tu función: pista (cuando eliminamos algo de un array, su longitud se verá afectada) */
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(param) {
  let arrayUnico = []
  for (let indice = 0; indice < param.length; indice++) {
    if (!arrayUnico.includes(param[indice])) {
      arrayUnico.push(param[indice])
    }
  }
  return arrayUnico
}
console.log(removeDuplicates(duplicates))
