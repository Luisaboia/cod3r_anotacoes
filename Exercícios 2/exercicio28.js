// create a function that receives an array
// return the second largest number of that array

function largestSecondNumber(array){
    let largest = 0;
    for(let i = 0; i < array.length - 1; i++){
        if(array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
}

console.log(largestSecondNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 200, 300, 400 ,500 ,600 ,1923, 12912]));