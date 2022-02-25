function boaNoticia(nota) {
  if (nota >= 7) {
    console.log(`Aprovado com sucesso com nota ${nota}`)
  } else {
    console.log(
      `Infelizmente você não passou...\nVocê precisava de uma nota maior ou igual a 7, mas você tirou ${nota}`
    )
  }
}

boaNoticia(7)
boaNoticia(8)
boaNoticia(6.99)

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log('É verdade... ' + valor)
  }
}

// Não reproduz (Falsos)
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)

// Reproduz (Verdadeiros)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
