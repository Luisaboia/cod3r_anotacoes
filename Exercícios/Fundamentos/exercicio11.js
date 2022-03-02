function ano(ano) {
  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    return `Ano Bissexto.`
  } else {
    return `Não é um Ano Bissexto.`
  }
}
console.log(ano(2018))
console.log(ano(2000))
console.log(ano(1998))
console.log(ano(1800))
console.log(ano(2150))
console.log(ano(2816))
console.log(ano(1949))
