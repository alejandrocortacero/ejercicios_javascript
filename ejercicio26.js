/*Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.*/
const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
//Respuesta
for (let i = 0; i < products.length; i++) {
  if (products[i].sellCount < 20) {
    badProducts.push(products[i])
  } else {
    goodProducts.push(products[i])
  }
}
console.log(badProducts)
console.log(goodProducts)
