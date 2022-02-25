// Armazenando uma função em uma variável
const soma = function (a, b) {
  console.log(a + b)
}

soma(1, 2)

// Armazenando uma arrow function em uma variável
// '=>' substitui o 'function'
const imprimirSoma = (a, b) => {
  console.log(a + b)
}

imprimirSoma(2, 3)

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))

const imprimirA = a => console.log(a)
imprimirA('Legal!!!')
