// pessoa -> Endereço de memória(123) -> Possui o objeto criado
const pessoa = { nome: 'João' }
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> Endereço de memória diferente(456) -> Possui o objeto criado
// pessoa = {nome: 'Ana'} retornará um erro! (Reatribuição de constante)

// A partir daqui, não podemos mais alterar o objeto!
Object.freeze(pessoa)
pessoa.nome = 'Maria'
// Cria uma classe
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(`Eu continuo sendo ${pessoa.nome}`)
console.log(pessoa)

// Criando um objeto constante
const pessoaConstante = Object.freeze({ nome: 'Raul' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)
