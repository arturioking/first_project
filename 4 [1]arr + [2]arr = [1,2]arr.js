//2 числовых массива создать третий который содержит общие элементы
// TODO: create function findItemWithUseObject. Use only object! [return array]
// TODO: use forEach for findItem function

let first_arr = [1,11,111];
let second_arr = [1,111,222, 10, 23];

function findItem(first_arr,second_arr) {
    let arr = [];

    for (let i = 0; i < first_arr.length; i++) {
        let item = first_arr[i];
        if (second_arr.includes(item)){
            arr.push(item);
        }
    }
    return arr;
}

console.log(findItem(first_arr, second_arr));


