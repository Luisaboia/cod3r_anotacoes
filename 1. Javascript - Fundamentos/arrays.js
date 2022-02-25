const valores = [7.7, 8.9, 6.2, 1.3]
valores[4] = 10
console.log(valores[0], valores[3], valores[4])

console.log(valores)
console.log(valores.length)

// Adicionando elementos ao Array
console.log(valores.push(2.9))
console.log(valores)

// Retirando elementos do Array
// Retira o último índice do Array
console.log(valores.pop())
// Retira um índice específico
delete valores[0]
console.log(valores)

console.log(`Tipo: ${typeof valores}`)
