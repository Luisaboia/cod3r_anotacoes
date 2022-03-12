// Usando a notação literal
const produto = {}
console.log(produto)

// Object em JS
const produto2 = new Object()
console.log(produto2)

// Função construtora
function Produtos(nome, preco, desc) {
  this.nome = nome
  this.getDesconto = () => {
    return (preco * (1 - desc)).toFixed(2)
  }
}

const p1 = new Produtos('Caneta', 7.99, 0.15)
const p2 = new Produtos('Notebook', 2899.99, 0.1)

console.log(`${p1.getDesconto()}\n${p2.getDesconto()}`)

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return ((salarioBase / 30) * (30 - faltas)).toFixed(2)
    }
  }
}

const f1 = criarFuncionario('João', 8500, 2)
const f2 = criarFuncionario('Maria', 9552, 3)
console.log(`${f1.getSalario()}\n${f2.getSalario()}`)

// Object.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna um objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
