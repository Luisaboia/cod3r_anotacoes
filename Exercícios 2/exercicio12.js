function removeProperty(p1, p2){
    const copy = Object.assign({}, p1)
    delete copy[p2]
    return copy
}

console.log(removeProperty({a: 1, b: 2}, "a"))
console.log(removeProperty({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao"))
