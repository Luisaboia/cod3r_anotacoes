// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

function removeNaN(array){
    return array.filter(item => typeof item === "number")
}

console.log(removeNaN(["Javascript", 1, "3", "Web", 20]))
console.log(removeNaN(["a", "c"]))