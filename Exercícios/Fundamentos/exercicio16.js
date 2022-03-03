function calculadora(x, y, op) {
  switch (op) {
    case '+':
      console.log(`${x + y}`)
      break
    case '-':
      console.log(`${x - y}`)
      break
    case '*':
      console.log(`${x * y}`)
      break
    case '/':
      console.log(`${x / y}`)
      break
    default:
      console.log('Operação não suportada.')
  }
}

calculadora(2, 3, '+')
calculadora(2, 3, '-')
calculadora(2, 3, '*')
calculadora(2, 3, '/')
calculadora(2, 3, '%')
