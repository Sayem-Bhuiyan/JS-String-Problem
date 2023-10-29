// write a function that will take 3 numbers will return the max number

function maxNumber(num1, num2, num3) {
    if ( num1 > num2 && num1 > num3){
        console.log('The max number is: ', num1);
    }
    else if (num2 > num1 && num2 > num3){
        console.log('The max number is: ', num2);
    }
    else {
        console.log('The max number is: ', num3);
    }
}
maxNumber(25, 45, 23);

function findMin(a, b, c){
   let minValue =  Math.min(a, b, c);
   return minValue;
}
let minValue = findMin(25, 53, 23);
console.log(minValue);