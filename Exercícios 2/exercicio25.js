function removeVovels(str) {
  const vovels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (!vovels.includes(str[i])) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeVovels('Sou uma frase'));