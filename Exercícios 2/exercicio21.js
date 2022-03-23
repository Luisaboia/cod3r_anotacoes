function returnMinorNumber(array){
    let minorNumber = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < minorNumber){
            minorNumber = array[i];
        }
    }
    return minorNumber;
}

console.log(returnMinorNumber([2, 5, 8, 11, 13, 15, 18]));
console.log(returnMinorNumber([2, 5, 8, 11, 13, 15, 18, 1, 3, 4]));