function objectToArray(obj) {
    let arr = []
    for (let key in obj) {
        arr.push([key, obj[key]])
    }
    return arr
}

console.log(objectToArray({ nome: "José", idade: 20, altura: 1.75 }))