function filterDigit(array, number) {
    return array.filter(array => array.toString().length === number);
}

console.log(filterDigit([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 200, 300, 400 ,500 ,600 ,1923, 12912], 3));