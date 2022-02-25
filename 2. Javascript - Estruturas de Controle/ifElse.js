const imprimirNota = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado')
  } else {
    console.log('Reprovado')
  }
}

imprimirNota(10)
imprimirNota(6)
imprimirNota('oi') // Cuidado!!!
