function reverseString(text){
    let words = text.split(' ');
    console.log(words);
    let result = [];
    for( let i = words.length - 1; i >= 0; i--){
        let element = words[i];
        result.push(element);
    }
    let reversed = result.join(' ');
    return reversed;
}
const myString = 'I know what I am actually';
const newString = reverseString(myString);
console.log(newString);