//тоже самое что и в 4, но разные элементы
// TODO: create function findItemWithUseObject. Use only object! [return array]
// TODO: use forEach for findItem function

let first_arr = [1,11,111];
let second_arr = [1,111,222];

function findItem(first_arr,second_arr) {
    let arr = [];
    for (let i = 0; i < first_arr.length; i++){
        let item1 = first_arr[i];
        if (!second_arr.includes(item1)){
            arr.push(item1);
        }
    }
    for (let i = 0; i < second_arr.length; i++){
        let item2 = second_arr[i];
        if (!first_arr.includes(item2)){
            arr.push(item2);
        }
    }
    return arr;
}

function findItemByForEach(first_arr,second_arr) {
    const arr = [];

    first_arr.forEach((item) => {
        if (!second_arr.includes(item)){
            arr.push(item);
        }
    })

    second_arr.forEach((item) => {
        if (!first_arr.includes(item)){
            arr.push(item);
        }
    });

    return arr;
}

function findItemWithUseObject(first_arr, second_arr) {
    const hash = {};

    first_arr.forEach((item) => {
        if (!second_arr.includes(item)){
            hash[item] = item;
        }
    })

    second_arr.forEach((item) => {
        if (!first_arr.includes(item)){
            hash[item] = item;
        }
    });
    return Object.values(hash);
}

console.log(findItem(first_arr, second_arr));
console.log(findItemByForEach(first_arr, second_arr));
console.log(findItemWithUseObject(first_arr, second_arr));
