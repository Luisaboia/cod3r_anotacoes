function trocaVetor(vetorA, vetorB) {
  if (vetorA.length == vetorB.length) {
    for (let i = 0; i < vetorA.length; i++) {
      vetorA[i] = vetorA[i] + vetorB[i]
      vetorB[i] = vetorA[i] - vetorB[i]
      vetorA[i] = vetorA[i] - vetorB[i]
    }
  } else {
    return 'Vetores diferentes'
  }

  console.log(`A: ${vetorA}`)
  console.log(`B: ${vetorB}`)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaVetor(vetorA, vetorB)
