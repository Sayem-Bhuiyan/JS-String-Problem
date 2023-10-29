// Math.pow()
const result = Math.pow(3, 2);
console.log(result);

const number1 = 25;
const number2 = 45;

// const gap = number1 - number2;
// Math.abs()
const gap = Math.abs(number1 - number2);
if ( gap < 5){
    console.log('you guys can  be friend');
}
else {
    console.log('you guys stay apart');
}

// Math.round()
const number = 2.565;
const fullNumber = Math.round(number);
console.log(fullNumber);

// ------------ Math.ceil()------------

const a = 3.00001;
const newA = Math.ceil(a);
console.log(newA);


// -------Math.floor() ----------

const b = 3.999;
const newB = Math.floor(b);
console.log(newB);


// -------Math.random();---------
console.log(Math.random());
// find number between 1 to 100

const random = Math.random()*100;
console.log(random);

