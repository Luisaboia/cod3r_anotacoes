function revertObject(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}

console.log(revertObject({a: 1, b: 2, c: 3}));