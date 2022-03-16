const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,
    {nome: 
        {value: 'Bia', enumerable: true, writable: false
    }
})

console.log(filha2.nome)
console.log(`${filha2.nome} tem cor de cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Loop For in para percorrer o objeto em sua order
// natural de inserção.
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(`Chaves padrões: ${key}`) : console.log(`Chaves por herança: ${key}`)
}