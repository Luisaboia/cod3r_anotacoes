function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda}${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4199.99,
  desc: 0.15,
  getPreco
}

console.log(produto.getPreco())

const carro = { preco: 12000, desc: 0.15 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Adiciona 0.17 de Imposto e troca a moeda para dólar, utilizando parâmetros por vírgulas (Call)
console.log(getPreco.call(carro, 0.17, '$'))
// Adiciona 0.2 de imposto e troca a moeda para dólar, utilizando arrays (Apply)
console.log(getPreco.apply(carro, [0.2, '$']))
