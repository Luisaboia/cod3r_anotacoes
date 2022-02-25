// É possível chamar 'Function declarations' antes mesmo delas,
// pois o Javascript lê todas as funções primeiro.
console.log(soma(4, 5))

// É necessário chamar as 'Function expressions' logo após a
// declaração de uma constante ou let.
console.log(sub(4, 2))

// Function declaration
function soma(a, b) {
  return a + b
}

// Function expression
const subtracao = function (a, b) {
  return a - b
}

// Named function expression
const mult = function mult(a, b) {
  return a * b
}
