function reverseString(text) {
    let reversed = '';
    for (let i = text.length-1; i >=0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(reversed);
    }
    return reversed
}

const text = 'i am good boy';
const textReversed = reverseString(text);
console.log(textReversed);
