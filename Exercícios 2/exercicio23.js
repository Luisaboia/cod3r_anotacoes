function countWords(str) {
    let count = 0;
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            count++;
        }
    }
    return count;
}

console.log(countWords('O rato roeu a roupa do rei de Roma'));
console.log(countWords('Sou uma frase'))