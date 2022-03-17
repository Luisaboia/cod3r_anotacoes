const nums = [1, 2, 3, 4, 5]

// Retorna o dobro do elemento dentro do índice.
let resultado = nums.map(function(elemento){
    return elemento * 2
})

// Ele cria um novo array, o original se mantém intacto.
console.log(resultado, nums)

const soma = elemento => elemento + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Map encadeado
resultado = nums.map(soma).map(triplo).map(paraDinheiro)
console.log(resultado)