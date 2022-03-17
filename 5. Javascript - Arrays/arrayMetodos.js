const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Remove o último elemento do Array.
pilotos.pop() 
console.log(pilotos)

// Adiciona o elemento no último índice do Array.
pilotos.push('Verstappen')
console.log(pilotos) 

// Remove o primeiro elemento do Array.
pilotos.shift() 
console.log(pilotos) 

// Adiciona um elemento no primeiro índice do Array.
pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice adiciona e remove elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3,1)
console.log(pilotos)

// Pega um pedaço e cria um novo Array.
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)