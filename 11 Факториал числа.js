//11. Факториал числа
// TODO: use recursion for factorial with ternary operator

function factorial(n) {
    let a = 1;
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= a++;
    }
    return result;
}

function factorialTernary(x) {
    return x <= 1 ? 1
        : x * factorial(x - 1);
}

console.log(factorial(4));
console.log(factorialTernary(4));