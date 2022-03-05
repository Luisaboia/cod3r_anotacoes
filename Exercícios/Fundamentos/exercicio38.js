function impar(inicio = 0, fim = 100) {
  if (inicio > fim) {
    inicio = fim + inicio
    fim = inicio - fim
    inicio = fim - inicio
  }
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 !== 0) {
      console.log(`${i} é ímpar!`)
    }
  }
}

impar(2, 95)
