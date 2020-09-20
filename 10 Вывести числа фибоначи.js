//10. Вывести числа фибоначи
// TODO: use recursion for fibo with ternary operator
function fibo(n) {
    let arr = [1, 1];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n - 2; i++){
        arr.push(arr[a++] + arr[b++]);
    }
    return arr;
}

function fibonacci(n) {
    return n < 1 ? 0
        : n <= 2 ? 1
            : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibo(8));
console.log(fibonacci(8));