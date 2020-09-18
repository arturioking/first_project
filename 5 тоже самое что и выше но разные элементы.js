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

console.log(findItem(first_arr, second_arr));
