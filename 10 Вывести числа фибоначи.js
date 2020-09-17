//10. Вывести числа фибоначи
function fibo(n) {
    let arr = [1, 1];
    let a = 0;
    let b = 1;
    for (i = 0; i < n - 2; i++){
        arr.push(arr[a++] + arr[b++]);
    }
    return arr;
}

console.log(fibo(7));