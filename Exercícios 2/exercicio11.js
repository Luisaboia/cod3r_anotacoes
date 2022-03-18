// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

function cutArray(a){
    const first = a.shift()
    const second = a.pop()
    
    return [first, second]
}
console.log(cutArray([7,14,21]))
console.log(cutArray([-100, "aplicativo", 16]))