function notas(notas) {
  const conceito = []
  for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 0 && notas[i] <= 4.9) {
      conceito.push('D')
    } else if (notas[i] >= 5 && notas[i] <= 6.9) {
      conceito.push('C')
    } else if (notas[i] >= 7 && notas[i] <= 8.9) {
      conceito.push('B')
    } else if (notas[i] >= 9 && notas[i] <= 10) {
      conceito.push('A')
    } else {
      conceito.push('Nota inválida')
    }
  }
  return conceito
}

const notasAluno = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
const vetorConceito = notas(notasAluno)

console.log(vetorConceito)
