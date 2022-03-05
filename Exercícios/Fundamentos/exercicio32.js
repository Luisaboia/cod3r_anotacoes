function media(vetor) {
  const tamanho = vetor.length
  const soma = vetor.reduce((a, b) => a + b, 0)
  return soma / tamanho
}

const vetor = [10, 20, 30, 40, 50]
console.log(media(vetor))
