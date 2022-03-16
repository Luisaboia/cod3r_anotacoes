function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const Aula1 = new Aula('Bem-Vindo!', 000)
const Aula2 = new Aula('Introdução.', 001)
console.log(Aula1, Aula2)

// Simulando o new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}