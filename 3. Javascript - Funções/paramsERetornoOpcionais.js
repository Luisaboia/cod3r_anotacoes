function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Área acima do permitido: ${area}m²`)
    // return area resolveria esse problema de 'undefined'
  } else {
    return area
  }
}
console.log(area(2, 5))
console.log(area(2))
console.log(area())
console.log(area(1, 2, 3, 4, 5))
console.log(area(2, 'a'))
console.log(area(5, 5))
