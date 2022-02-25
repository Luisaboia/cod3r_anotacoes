let comparaComThis = function (param) {
  console.log(this === param)
}

// Como o 'global' é um objeto global, ele retorna true. Após isso,
// verifica se 'this' e 'global' são estritamente iguais e exibe 'true',
// pois ambos estão em um contexto global.
comparaComThis(global)
// Console: True

const obj = {}
// comparaComThis aponta para o 'obj' e não mais para o escopo global,
// como o escopo foi alterado, o 'global' comparado ao 'this' dá false,
// por ter retirado 'this' do escopo global.
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
// Console: False

const obj2 = {}
comparaComThis = comparaComThis.bind(obj2)
// Passamos a referenciar o objeto, não mais o escopo global,
// o resultado esperado será true.
comparaComThis(obj2)
// Console: True

let comparaComThisArrow = param => console.log(this === param)
// Irá retornar false, pelo fato de que o this se referencia agora
// ao próprio módulo, não mais ao escopo global.
comparaComThisArrow(global)
// Console: False

let comparaComThisArrow2 = param => console.log(this === param)
// Quando referenciamos o this ao módulo da própria função arrow,
// ele retorna verdadeiro.
comparaComThisArrow2(module.exports)
// Console: True

let comparaComThisArrow3 = param => console.log(this === param)
comparaComThisArrow3(this)
// Console: True

let comparaComThisArrow4 = param => console.log(this === param)
// O módulo da arrow function se sobressai ao bind.
comparaComThisArrow4 = comparaComThisArrow4.bind(obj)
comparaComThisArrow4(obj)
// Console: False
