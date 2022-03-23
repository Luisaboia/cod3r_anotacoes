function countChar(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            count++;
        }
    }
    return count;
}

console.log(countChar('a', 'Sou uma frase'));
console.log(countChar('o', 'O rato roeu a roupa do rei de Roma'));
console.log(countChar('o', 'o rato roeu a roupa do rei de Roma'));