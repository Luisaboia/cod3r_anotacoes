function intervalo(intervalo) {
  for (let i of intervalo) {
    if (intervalo[i] >= 10 && intervalo[i] <= 20) {
      console.log(`${intervalo[i]} está no intervalo 10-20!`)
    } else {
      console.log(`${intervalo[i]} não está no intervalo 10-20!`)
    }
  }
}

const vetor = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30
]
intervalo(vetor)
