function calculaSalario(salario, plano) {
  switch (plano) {
    case 'a':
      // 10%
      return salario + salario * 0.1
    case 'b':
      // 15%
      return salario + salario * 0.15
    case 'c':
      // 20%
      return salario + salario * 0.2
    default:
      return 'Plano não existe, tente novamente.'
  }
}

console.log(calculaSalario(1000, 'a'))
console.log(calculaSalario(1000, 'b'))
console.log(calculaSalario(1000, 'c'))
console.log(calculaSalario(1000, 'd'))
