const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(typeof peso1)
console.log(typeof peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const nota1 = 9.8
const nota2 = 5.3
const media = (nota1 + nota2) / 2

// Limita as casas decimais em duas
console.log(media.toFixed(2))
// Transforma em string binária
console.log(media.toString(2))
console.log(typeof media)
