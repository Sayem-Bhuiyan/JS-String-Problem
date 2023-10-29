// fibonacci series = [0 , 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, .....]

let fibo = [0, 1];
for ( let i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);


function findFibonacci(n){
    let fibo = [ 0, 1];
    for( let i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(findFibonacci(15));