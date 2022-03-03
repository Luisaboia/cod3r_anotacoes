function caixa(valor) {
  const notas = [100, 50, 20, 10, 5, 1]
  const troco = { 100: 0, 50: 0, 10: 0, 5: 0, 1: 0 }

  for (let i of notas) {
    while (valor >= i) {
      troco[i] += 1
      valor -= i
    }
  }
  return troco
}

console.log(`Troco para 18: ${caixa(18)}`)
console.log(`Troco para 200: ${caixa(200)}`)
