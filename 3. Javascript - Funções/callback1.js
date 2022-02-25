const fabricantes = ['Mercedes', 'Audi', 'BMW']

// forEach(nome, indice)
function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

// forEach(NOME DO ELEMENTO DESDE O 0, ÍNDICE DO ARRAY, ARRAY INTEIRO)
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))
