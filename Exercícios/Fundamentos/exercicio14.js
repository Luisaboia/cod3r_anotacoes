const fruta = prompt(`Qual fruta você deseja?`)

switch (fruta) {
  case `maca`:
    console.log(`Não vendemos esta fruta aqui`)
    break
  case `kiwi`:
    console.log(`Estamos com escassez de kiwis`)
    break
  case `melancia`:
    console.log(`Aqui está, são R$3,00 o quilo`)
    break
  default:
    console.log(`Erro.`)
}
