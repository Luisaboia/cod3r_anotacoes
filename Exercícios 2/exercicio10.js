// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

function putPlus(n){
    let result = ''
    for (let i = 0; i < n; i++){
        result += "+"
    }
    return result
}

console.log(putPlus(2))
console.log(putPlus(4))