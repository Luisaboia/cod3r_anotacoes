Array.prototype.map2 = function(c) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        novoArray.push(c(this[i], i, this))
    }
    return novoArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const objeto = json => JSON.parse(json)
const preco = produto => produto.preco
const converteDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
const resultado = carrinho.map2(objeto).map2(preco)
console.log(resultado.map(converteDinheiro))