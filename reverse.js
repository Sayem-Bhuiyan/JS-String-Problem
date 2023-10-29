function reverseString(text){
    let resversed = '';
    for ( let i = text.length - 1; i >= 0; i--){
        let element = text[i];
        resversed = resversed + element;
    }
    return resversed;
}

const myString = 'I am a good boy';
console.log(myString);

const newString = reverseString(myString);
console.log('Reversed Output: ' ,newString);