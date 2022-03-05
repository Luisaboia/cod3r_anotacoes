function calculaNegativo(vetor) {
  let negativos = []
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] < 0) {
      negativos.push(vetor[i])
    }
  }
  return `Possui no total: ${negativos.length} números negativos. \nOs números são: ${negativos}`
}

const array = [0, -2, -3, 10, 9, 5, -6]
console.log(calculaNegativo(array))
