let contador = 1
while (contador <= 10) {
  console.log(`Contador WHILE = ${contador}`)
  contador++
}

for (let i = 0; i <= 10; i++) {
  console.log(`Contador FOR = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
  console.log(`Notas = ${notas[i]}`)
}