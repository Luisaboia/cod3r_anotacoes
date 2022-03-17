console.log(typeof Array, typeof new Array, typeof [])

// Uma forma não usual de criar Arrays.
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Consulta aos índices do Array.
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

// Adiciona itens no Array.
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

// Descobre o tamanho do Array.
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

// Organiza o Array em ordem alfabética.
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

// Deleta um dos índices o deixando como 'undefined', porém, tudo continua igual.
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

// Splice consegue remover um índice, seus subsequentes
// e adicionar novos elementos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)