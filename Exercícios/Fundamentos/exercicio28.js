function descobre(valores) {
  for (let i of valores) {
    if (valores[i] % 2 === 0) {
      console.log(`${valores[i]} é par!`)
    } else {
      console.log(`${valores[i]} é ímpar!`)
    }
  }
}

const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
descobre(valores)
