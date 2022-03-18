// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.

function pushArray(e, n){
    const array = []
    for(let i = 0; i < n; i++){
        array.push(e)
    }
    return array
}

console.log(pushArray("código", 2))
console.log(pushArray(7, 3))
