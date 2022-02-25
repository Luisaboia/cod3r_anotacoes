// Função em JS e First-Class Object Citizen
// High-Order Function

// Criar de forma literal
function fun1() {
  // Caso vazia, retorna undefined
}

// Armazenar função em uma variável
const constante = function fun2() {
  // Caso vazia, retorna undefined
}

// Armazenar em um array
const array = [
  function (a, b) {
    return a + b
  },
  fun1,
  constante
]
console.log(array[0](1, 2))

// Armazenar em um atributo de objeto
const obj = {
  falar: function () {
    return 'Opa!'
  }
}
console.log(obj.falar())

// Passar função como parâmetro
function executar(exec) {
  exec()
}

executar(function () {
  console.log('Executando!')
})

// Uma função como retorno
function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}
soma(2, 3)(5)
const cincoMais = soma(2, 3)
cincoMais(5)
