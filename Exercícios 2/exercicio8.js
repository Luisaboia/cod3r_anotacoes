// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiply(n1, n2){
    let result = 0
    for(let i = 0; i < n2; i++){
        result += n1
    }
    return result
}

console.log(multiply(5, 5))
console.log(multiply(0, 7))
