//2 числовых массива создать третий который содержит общие элементы
// TODO: create function findItemWithUseObject. Use only object! [return array]
// TODO: use forEach for findItem function

let first_arr = [1,11,111];
let second_arr = [1,111,222, 10, 23];

function findItem(first_arr,second_arr) {
    let arr = [];

    first_arr.forEach((item) => {
        if (second_arr.includes(item)){
            arr.push(item);
        }
    })
    return arr;
}

function findItemWithUseObject(first_arr, second_arr) {
    const hash = {};

    first_arr.forEach((item) => {
        if(second_arr.includes(item)) {
            hash[item] = item;
        }
    });
    return Object.values(hash);
}

console.log(findItem(first_arr, second_arr));
console.log(findItemWithUseObject(first_arr, second_arr));



