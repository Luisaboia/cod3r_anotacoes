//              01234
const escola = 'Cod3r'

// Onde está um caractere
console.log(escola.charAt(1))
console.log(escola.charAt(5))

// Descobre o Unix Code de um caractere
console.log(escola.charCodeAt(3))

// Descobre o index do elemento (0-x)
console.log(escola.indexOf('o'))

// Seleciona quanto uma string irá aparecer (od3r); (ode)
console.log(escola.substring(1))
console.log(escola.substring(1, 4))

// Concatena strings
console.log('Escola '.concat(escola).concat('!'))

// Substitui um caractere por outro
console.log(escola.replace(3, 'e'))

// Transforma string em array
console.log('Ana,Maria,Pedro'.split(','))
