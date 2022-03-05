function plano(i) {
  let preco = 100
  if (i > 60) {
    return `Preço a ser pago: R$ ${preco + 130}`
  } else if (60 >= i && i > 30) {
    return `Preço a ser pago: R$ ${preco + 95}`
  } else if (30 >= i && i > 10) {
    return `Preço a ser pago: R$ ${preco + 50}`
  } else {
    return `Preço a ser pago: R$ ${preco + 80}`
  }
}

console.log(plano(9))
console.log(plano(13))
console.log(plano(25))
console.log(plano(62))
console.log(plano(60))
