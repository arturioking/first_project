//9. Функция сортировки массива sortir([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ])

let arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];

function sortir(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}

console.log(sortir(arr));
