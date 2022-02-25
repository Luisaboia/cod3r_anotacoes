// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(10, 3)
imprimirSoma(10)
// imprimirSoma(10, 3, 1, 2, 3, 4, 5, 6, 7, 8, 9)
imprimirSoma()

// Função com retorno
function soma(a, b = 0) {
  return a + b
}

console.log(soma(1, 2))
console.log(soma(1))
console.log(soma())
