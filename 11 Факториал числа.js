//11. Факториал числа

function factorial(n) {
    let a = 1;
    let result = 1;
    for (i = 0; i < n; i++){
        result *= a++;
    }
    return result;
}

console.log(factorial(5));