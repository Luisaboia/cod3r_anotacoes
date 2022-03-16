// Object.preventExtensions
// É possível excluir e modificar, porém não adicionar.
const produtos = Object.preventExtensions({
    nome: ' Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log(`Extensível: ${Object.isExtensible(produtos)}`)
produtos.nome = 'Borracha'
produtos.descricao = 'Uma borracha escolar branca.'
delete produtos.tag
console.log(produtos)

// Object.seal
// É possível modificar, porém não adicionar nem excluir.
const pessoa = {
    nome: 'Julia',
    idade: 35
}
Object.seal(pessoa)
console.log(`Selado: ${Object.isSealed(pessoa)}`)
delete pessoa.idade
pessoa.sobrenome = 'Silva'
pessoa.idade = 29
console.log(pessoa)

// Object.freeze
// Não é possível modificar, adicionar nem excluir.