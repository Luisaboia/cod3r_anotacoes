const sequencia = {
    /*Aqui a variável é criada com o underline na frente
    que é a convenção adotada para atributos que serão acessados
    via getter setter*/
    _valor: 1,
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

const pessoa2 = { 
    nome: 'João',
    sobrenome: 'Santos',
    idioma: 'Português',
    get linguagem(){
        return this.idioma
    }
}

console.log(pessoa2.idioma)
console.log(pessoa2)

let pessoa = { 
    nome: 'João',
    sobrenome: 'Henrique',
    idioma: '',

    set linguagem(lang){
        this.idioma = lang
    }
}
pessoa.linguagem = 'Português'
console.log(pessoa.idioma)
console.log(pessoa)

const sequencia2 = {
    _valor2: 42,
    get valor2(){
        return this._valor2++
    },
    set valor2(valor2){
        if (valor2 > this._valor2){
            this._valor2 = valor2
        }
    }
}

console.log(sequencia2.valor2, sequencia2.valor2)