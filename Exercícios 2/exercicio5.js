//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function biggerThen(n1,n2){
    const check = (typeof n1 === typeof n2) && (n1 >= n2)
    return `${n1} é maior ou igual que ${n2}? ${check}`
}

console.log(biggerThen(10,2))
console.log(biggerThen(2,10))
console.log(biggerThen(10,10))
console.log(biggerThen(10,"10"))