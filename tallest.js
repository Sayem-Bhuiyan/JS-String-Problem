function maxInArray(numbers){
    let tallest = numbers[0];
    for ( let i = 0; i < numbers.length; i++){
        const index = i;
        const height = numbers[index];
        if (height > tallest){
            tallest = height;
        }
    }
    return tallest;
}
const height = [167, 190, 120, 165, 137];
const tallest = maxInArray(height);
console.log('The tallest person is:', tallest);