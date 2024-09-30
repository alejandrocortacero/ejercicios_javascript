/*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
//Respuesta
const mayores = []
const menores = []
for (i = 0; i < users.length; i++)
  if (users[i].years < 18) {
    menores.push(users[i].name)
  } else {
    mayores.push(users[i].name)
  }
console.log('Usuarios mayores de edad: ' + mayores)
console.log('Usuarios menores de edad: ' + menores)
