function anuidade(valor, mes) {
  if (0 < mes && mes < 13) {
    const atraso = mes - 1
    return `O valor a ser pago no mês ${mes} é: R$ ${(
      valor *
      (1 + 0.05) ** atraso
    ).toFixed(2)}`
  } else {
    return 'Mês inválido'
  }
}

console.log(anuidade(100, 4))
