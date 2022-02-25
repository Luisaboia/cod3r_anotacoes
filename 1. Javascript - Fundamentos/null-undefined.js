// Variável não inicializada
let valor
console.log(valor)

// Não aponta para nenhum local da memória
valor = null
console.log(valor)

const prod1 = {}
console.log(prod1.preco)
console.log(prod1)

prod1.preco = 19.9
console.log(prod1)

// Evite atribuir undefined, sempre opte pelo null
prod1.preco = undefined
console.log(!!prod1.preco)
console.log(prod1)

// Produto com preço 0
prod1.preco = null
console.log(!!prod1.preco)
console.log(prod1)
