const jogos = '10, 20, 20, 8, 25, 3, 0, 30, 1'

function desempenho(registros) {
  let valor = registros.split(',')
  let maiorPontuacao = Number(jogos[0])
  let menorPontuacao = Number(jogos[0])
  let recorde = 0
  let piorJogo = 1

  for (let i = 1; i < valor.length; i++) {
    if (Number(valor[i] > maiorPontuacao)) {
      maiorPontuacao = Number(valor[i])
      recorde++
    } else if (Number(valor[i] < menorPontuacao)) {
      menorPontuacao = Number(valor[i])
      piorJogo = i + 1
    }
  }
  return [recorde, piorJogo, maiorPontuacao, menorPontuacao]
}

console.log(desempenho(jogos))
