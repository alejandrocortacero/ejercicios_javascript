const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
console.log(avengers[0])

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers[0] = 'IRONMAN'
console.log(avengers[0])

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.push())

//1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[4])

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters.pop()
console.log(rickAndMortyCharacters2[0], rickAndMortyCharacters2[6])

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1)
console.log(rickAndMortyCharacters3)
