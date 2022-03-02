function descobrirTriangulo(c1 = 0, c2 = 0, c3 = 0) {
  if (c1 === c3 && c1 === c2) {
    return `O triângulo é: Equilátero`
  } else if (c1 === c2 || c1 === c3) {
    return `O triângulo é: Isósceles`
  } else {
    return `O triângulo é: Escaleno`
  }
}

console.log(descobrirTriangulo(2, 2, 2))
console.log(descobrirTriangulo(3, 3, 2))
console.log(descobrirTriangulo(1, 2, 3))
console.log(descobrirTriangulo())
