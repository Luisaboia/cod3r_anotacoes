function numerosPares() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(`${i} é par!`)
    } else {
      console.log(`${i} é ímpar!`)
    }
  }
}

numerosPares()
