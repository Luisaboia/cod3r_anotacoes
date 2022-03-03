function caixa(compra, pago) {
  const valorCompra = parseFloat(compra)
  const valorPago = parseFloat(pago)
  let troco = 0

  if (valorPago === valorCompra) {
    console.log(`Não gerou troco.`)
  } else if (valorPago > valorCompra) {
    troco = valorPago - valorCompra
    console.log(`${calcularNota(troco)}`)
  } else {
    console.log(`Não gerou troco por um erro inesperado.`)
  }
}

function calcularNota(n) {
  const notas = [100, 50, 20, 10, 5, 1]
  let texto = ''
  for (let i = 0; i < notas.length; i++) {
    if (n >= notas[i]) {
      const calculo = Math.floor(n / notas[i])
      texto += calculo + ` notas de ${notas[i]}\n`
      n -= calculo * notas[i]
    }
  }
  return texto
}

caixa(100, 273)
