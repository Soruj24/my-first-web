function reversWords(str) {
    const words = str.split(' ');
    const results = [];
    for (let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        results.push(element);
    }
    return results;
}

const myString = 'I am a Good Boy';
const result = reversWords(myString);
console.log(result);
