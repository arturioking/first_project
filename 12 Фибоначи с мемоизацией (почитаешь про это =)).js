//12. Фибоначи с мемоизацией (почитаешь про это =))

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Взято из кеша', n);
            return cache[n];
        }
        else {
            console.log('Посчитано вживую', n);
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
const fibo = memoize(
    (n) => {
        if (n <= 2) {
            return 1;
        }
        else {
            return fibo(n - 1) + fibo(n - 2 );
        }
    }
);

console.log(fibo(6));
console.log(fibo(7));
