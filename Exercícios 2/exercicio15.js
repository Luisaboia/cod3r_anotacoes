function evenNumbers(array){
    return array.filter(number => number % 2 === 0)
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))