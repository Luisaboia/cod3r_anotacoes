let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// '!' é o sinal de negação, ou 'Not'.
// Toda variável com conteúdo, por padrão retorna um valor true, já uma que não possui um dado, retorna falsa.
// '!!' serve para mostrar seu verdadeiro valor booleano.
// '!' serve para mostrar seu valor booleano e invertê-lo.
isAtivo = 1
console.log(!!isAtivo)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
const newLocal_1 = (isAtivo = true)
console.log(!!newLocal_1)

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
const newLocal = (isAtivo = false)
console.log(!!newLocal)

console.log('Pra finalizar...')
// Operador OU sempre irá dar preferência ao valor positivo
console.log('' || null || undefined || 0 || 'oi')

// Exemplo
let nome = ''
console.log(nome || 'Sem nome')
