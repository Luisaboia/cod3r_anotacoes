function maiorMenor(vetor) {
  let menor
  let maior
  for (let i = 0; i < vetor.length; i++) {
    if (maior === undefined && menor === undefined) {
      maior = vetor[i]
      menor = vetor[i]
    } else {
      if (vetor[i] > maior) {
        maior = vetor[i]
      }
      if (vetor[i] < menor) {
        menor = vetor[i]
      }
    }
  }
  return [maior, menor]
}

const array = [0, 123, 23213, 5123213, 12312312, 312, 5645635]
console.log(maiorMenor(array))
