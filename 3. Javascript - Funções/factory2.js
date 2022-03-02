function fabricaDeCarro(nome, modelo) {
  return {
    nome,
    modelo,
    motor: 'v8'
  }
}

console.log(fabricaDeCarro('Mercedes', 2010))
console.log(fabricaDeCarro('BMW', 2014))
