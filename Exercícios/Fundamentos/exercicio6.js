function jurosSimples(capital, taxaJuros, tempo) {
  return `O montante em juros simples é: ${(
    capital *
    taxaJuros *
    tempo
  ).toFixed(2)}`
}

function jurosCompostos(capital, taxaJuros, tempo) {
  return `O montante em juros compostos é: ${(
    capital *
    (1 + taxaJuros) ** tempo
  ).toFixed(2)}`
}

console.log(jurosSimples(100, 0.1, 1))
console.log(jurosCompostos(100, 0.1, 1))
