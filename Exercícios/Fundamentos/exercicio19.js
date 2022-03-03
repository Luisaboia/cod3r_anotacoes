function comprarLanche(cod, qtd) {
  switch (cod) {
    case 100:
      return `Cachorro Quente | R$ ${(qtd * 3).toFixed(2)}`
    case 200:
      return `Hambúrguer Simples | R$ ${(qtd * 4).toFixed(2)}`
    case 300:
      return `Cheeseburguer | R$ ${(qtd * 5.5).toFixed(2)}`
    case 400:
      return `Bauru | R$ ${(qtd * 7.5).toFixed(2)}`
    case 500:
      return `Refrigerante | R$ ${(qtd * 3.5).toFixed(2)}`
    case 600:
      return `Suco | R$ ${(qtd * 2.8).toFixed(2)}`
    default:
      return `Produto não existente.`
  }
}

console.log(comprarLanche(100, 2))
console.log(comprarLanche(200, 2))
console.log(comprarLanche(300, 2))
console.log(comprarLanche(400, 2))
console.log(comprarLanche(500, 2))
console.log(comprarLanche(600, 2))
console.log(comprarLanche(700, 2))
