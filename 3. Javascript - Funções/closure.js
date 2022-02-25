// Close é o escopo que envolve quando a função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas.

// Contexto léxico em ação!

const x = 'Global'

function fora() {
  const x = 'Local'
  function dentro() {
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
