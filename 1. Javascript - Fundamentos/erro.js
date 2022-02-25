function lancarErro(erro) {
  throw new Error('Ocorreu um erro...')
}

function gritarMensagem(obj) {
  try {
    console.log(`${obj.name.toUpperCase()}!!!`)
  } catch (e) {
    lancarErro(e)
  } finally {
    console.log('Executado!')
  }
}

const obj = { name: 'Luis' }
gritarMensagem(obj)
