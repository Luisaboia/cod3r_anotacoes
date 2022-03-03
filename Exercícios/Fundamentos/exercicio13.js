const dia = function diaUtil(dia) {
  switch (dia) {
    case 1:
    case 7:
      console.log(`Sorria! Hoje é fim de semana!`)
      break
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log(`Droga, hoje é dia de semana...`)
      break
    default:
      console.log(`Dia inválido`)
  }
}

dia(1)
dia(7)
dia(2)
dia(3)
dia(4)
dia(5)
dia(6)
dia(0)
