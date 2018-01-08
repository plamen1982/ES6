function letterOccurencesInString(word, letter) {
    let result = [];
    result = word.split('').filter(l => l === letter)
    return result.length;
}

console.log(letterOccurencesInString('hello', 'l'));