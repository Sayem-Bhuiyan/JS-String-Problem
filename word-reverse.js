function reverseWord(str){
    let words = str.split(' ');
    let reversed = [];
    for ( let i = words.length - 1; i >= 0; i--){
        let element = words[i];
        reversed.push(element);
    }
    const result = reversed.join(' ');
    return result;
}

const myString = 'I am a good boy';
const reversedWordString = reverseWord(myString);
console.log(reversedWordString);