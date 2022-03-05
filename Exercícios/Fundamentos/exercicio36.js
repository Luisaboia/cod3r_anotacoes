const multiplica = (vetor, ni) => {
  let resultado = []
  vetor.forEach(n => {
    resultado.push(n * ni)
  })
  return resultado
}

const multiplicaOutro = (vetor, ni) => {
  let resultado = []
  vetor.forEach(n => {
    resultado.push(n > 5 ? n * ni : n)
  })
  return resultado
}

const vetorInt = [1, 3, 5, 7, 10]
console.log(multiplica(vetorInt, 5))
console.log(multiplicaOutro(vetorInt, 5))
