const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Captura as chaves do objeto
console.log(Object.keys(pessoa))

// Captura os valores do objeto
console.log(Object.values(pessoa))

// Pega uma lista dos chaves e valores
console.log(Object.entries(pessoa))

// Percorrer array de entradas
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// Criar uma propriedade de Chave/Valor
Object.defineProperty(pessoa, 'dataNascimento',{
    // Permite ser mapeado
    enumerable: true,
    // Permite ser reescrito
    writable: false,
    // Atribui um valor à propriedade
    value: '01/01/2019'
})

pessoa.dataNascimento = '02/02/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Concatenar chaves e valores de outros objetos
// em outro objeto com Object.assign()
const destino = { a: 1}
const o1 = { b: 2}
const o2 = {c: 3, a: 4}
// Caso uma chave já exista no objeto de destino,
// o valor será reescrito pelo novo
const obj = Object.assign(destino, o1, o2)
Object.entries(destino).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Object.freeze(x) "congela" um objeto, não fazendo ele
// mudar mais o valor.
Object.freeze(obj)
obj.a = 1234
console.log(obj)