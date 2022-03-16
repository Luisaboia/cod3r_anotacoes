// Prototype Chain
Object.prototype.attr0 = '0' // Isto não é uma boa prática!

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'D'}
const filho = {__proto__: pai, attr3: 'C'}

// Filho tem?
// Pai tem?
// Avô tem?
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    // Sombreamento (velMax sobrescreve o velMax do pai).
    velMax: 324
}

// Com o "super", chamamos a função acima do objeto filho
// Exemplo: Filho possui uma função e pai também, o super
// irá ignorar a função dentro do objeto filho, e irá chamar
// a do pai. 
// OBS: Desde que tenham o mesmo nome!
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())