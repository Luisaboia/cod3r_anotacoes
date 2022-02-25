const saudacao = 'Opa!' // Contexto léxico

function exec() {
  const saudacao = 'Fala!!' // Contexto léxico 2
  return saudacao
}

// Objetos são grupos aninhados de chaves de pares nome/valor

const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua',
    numero: 192
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
