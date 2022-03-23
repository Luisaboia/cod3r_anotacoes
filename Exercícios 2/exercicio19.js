function calculateAverage(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return Math.floor(sum / array.length);
}

console.log(calculateAverage([2, 5, 8, 11, 13, 15, 18]));