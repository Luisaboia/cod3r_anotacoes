// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(
  soma1(1), // Funciona normalmente
  soma1(1, 2), // Soma 1+2+1
  soma1(1, 2, 3), // Soma 1+2+3
  soma1(0, 0, 0), // Retorna para o valor padrão, por 0 ser falso, logo: 1+1+1
  soma1('teste', 0, 0) // Concatena strings, por ser valor verdadeiro, e zero falsos retornam ao valor padrão.
)

// Estrategias 2,3 e 4 para gerar valor padrão
function soma2(a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
  return a + b + c
}

console.log(
  soma2(1), // Funciona normalmente
  soma2(1, 2), // Soma 1+2+1
  soma2(1, 2, 3), // Soma 1+2+3
  soma2(0, 0, 0), // Soma 0+0+0
  soma2('teste', 0, 0) // Concatena strings, por ser valor verdadeiro.
)

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}

console.log(
  soma3(1), // Funciona normalmente
  soma3(1, 2), // Soma 1+2+1
  soma3(1, 2, 3), // Soma 1+2+3
  soma3(0, 0, 0), // Soma 0+0+0
  soma3('teste', 0, 0) // Concatena strings, por ser valor verdadeiro.
)
