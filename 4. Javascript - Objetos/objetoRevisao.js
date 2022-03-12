// Coleção dinâmica de pares chave/valor

const produtos = new Object()
produtos.nome = 'Cadeira'
produtos['Marca do produto'] = 'Generica'
produtos.preco = 220
console.log(produtos)
delete produtos.preco
console.log(produtos)

const carro = {
  modelo: 42,
  preco: 75000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [
    {
      nome: 'Lucas',
      idade: 25
    },
    {
      nome: 'Jessica',
      idade: 22
    }
  ],
  calcularValorSeguro: () => {
    // ...
  }
}

console.log(carro)
carro.preco = 75000 - carro.preco * 0.15
console.log(carro)
