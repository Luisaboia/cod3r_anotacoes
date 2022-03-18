// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
// entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo
// ...".

function check(v){
    const type = typeof v
    if(type == "boolean"){
        return !v
    } else if (type == "number"){
        return -v
    } else {
        return `Boolean ou número esperados, porém o tipo é ${type}`
    }
}

console.log(check(true))
console.log(check("6"))
console.log(check(-2000))
console.log(check(2000))
console.log(check("programação"))