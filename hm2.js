// write a function to get the lowest number in an array
function lowestNumber(numbers){
    let lowest = numbers[0];
    for ( let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if( lowest > element){
            lowest = element;
        }
    }
    return lowest;
}

const numbers = [23, 42, 12, 43, 53, 53, 23, 57, 64, 65, 21];
const findLowestNumber = lowestNumber(numbers);
console.log(findLowestNumber);