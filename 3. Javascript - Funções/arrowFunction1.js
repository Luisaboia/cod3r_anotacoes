let dobro = function (a) {
  return a * 2
}

// Arrow Functions com apenas um parâmetro, não é necessário '()'
dobro = a => {
  return a * 2
}

// Quando funções fazem poucas coisas, é possível retirar o return e colocar na mesma linha
dobro = a => a * 2
console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá!' // Melhor usar esta para legibilidade
ola = _ => 'Olá!' // Possui um parâmetro
console.log(ola())
