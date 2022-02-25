const pessoa = {
  saudacao: 'Opa!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Diferenças entre programação funcional e programação O.O

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() // Bind amarra um objeto para ele ser o dono da execução desse método
