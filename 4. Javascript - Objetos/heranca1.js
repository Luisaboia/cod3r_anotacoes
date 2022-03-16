const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
// Isto confirma que o Prototype consta na Ferrari.
console.log(ferrari.__proto__ === Object.prototype)
// Isto confirma que o Prototype consta no Volvo.
console.log(volvo.__proto__ === Object.prototype)
// Prototype não tem um protótipo!
console.log(Object.prototype.__proto__)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){

}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)