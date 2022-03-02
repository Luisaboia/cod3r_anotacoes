function calculaBhaskara(ax2, bx, c) {
  const resultados = []
  let delta = bx ** 2 - 4 * ax2 * c
  let x1Linha = (-bx + Math.sqrt(delta)) / (2 * ax2)
  let x2Linha = (-bx - Math.sqrt(delta)) / (2 * ax2)
  resultados.push(x1Linha)
  resultados.push(x2Linha)
  if (delta < 0){
    return `Delta negativo (${delta})`
  }
  return resultados
}

console.log(calculaBhaskara(1, 3, 2))
console.log(calculaBhaskara(3, 2, 1))
