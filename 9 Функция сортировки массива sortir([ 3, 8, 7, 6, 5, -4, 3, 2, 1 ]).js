//9. Функция сортировки массива sortir([ 3, 8, 7, 6, 5, -4, 3, 2, 1 ])
// TODO: sort array of objects by age

const data = [
    {
        name: 'Maxim',
        age: 32
    },
    {
        name: 'Ivan',
        age: 3
    },
    {
        name: 'Artur',
        age: 23
    },
    {
        name: 'Shashel',
        age: 13
    }
];

data.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
});

console.log(data);

// let arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//
// function sortir(arr) {
//     return arr.sort((a, b) => a - b);
// }
//
// console.log(sortir(arr));