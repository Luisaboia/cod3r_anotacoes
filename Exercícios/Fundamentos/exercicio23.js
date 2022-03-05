function mediaPonderada(n1, n2, n3) {
  if (n1 > n2 || n1 > n3) {
    const calculo = (n1 * 4 + n2 * 3 + n3 * 3) / 10
    if (calculo >= 5) {
      console.log(`Aprovado com nota ${calculo}`)
    } else {
      console.log(`Reprovado com nota ${calculo}`)
    }
  } else if (n2 > n1 || n2 > n3) {
    const calculo = (n1 * 3 + n2 * 4 + n3 * 3) / 10
    if (calculo >= 5) {
      console.log(`Aprovado com nota ${calculo}`)
    } else {
      console.log(`Reprovado com nota ${calculo}`)
    }
  } else if (n3 > n2 || n3 > n1) {
    const calculo = (n1 * 3 + n2 * 3 + n3 * 4) / 10
    if (calculo >= 5) {
      console.log(`Aprovado com nota ${calculo}`)
    } else {
      console.log(`Reprovado com nota ${calculo}`)
    }
  }
}

mediaPonderada(8, 8, 8)
