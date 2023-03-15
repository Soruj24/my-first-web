function reverseString(text) {
    let revered = '';
    for (let i = text.length-1; i >=0; i--){
        const element = text[i]
        revered = revered + element
        console.log(revered);
    }
    return revered
}

const myString = 'i am good boy';
const revers = reverseString(myString);
console.log(revers);