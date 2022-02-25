const pessoa = {
  nome: 'Ana',
  idade: 30,
  formacao: 'Ensino Médio',
  endereco: {
    logradouro: 'Rua ABC',
    numero: 123
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { formacao, etnia, bemHumorada = true } = pessoa
console.log(formacao, etnia, bemHumorada)

const {
  endereco: { logradouro, numero, cep }
} = pessoa
console.log(logradouro, numero, cep)

const {
  conta: { ag, num }
} = pessoa
console.log(ag, num)
