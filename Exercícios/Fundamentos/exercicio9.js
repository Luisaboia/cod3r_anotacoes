function notas(nota) {
  let notaArredondada = arredondaNota(nota)
  if (notaArredondada < 40) {
    console.log(`Reprovado. Nota: ${notaArredondada}`)
  } else {
    console.log(`Parabéns! Você foi aprovado com nota ${notaArredondada}`)
  }
}
function arredondaNota(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5))
  } else {
    return nota
  }
}

notas(100)
notas(38)
notas(30)
notas(21)
notas(0)
notas(48)
