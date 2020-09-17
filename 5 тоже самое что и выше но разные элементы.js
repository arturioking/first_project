//тоже самое что и в 4, но разные элементы

let first_arr = [1,11,111];
let second_arr = [1,111,222];

function findItem(first_arr,second_arr) {
    let arr = [];
    for (let i = 0; i < first_arr.length; i++){
        let item1 = first_arr[i];
        if (second_arr.includes(item1)){
            delete item1;
        } else {
            arr.push(item1);
        }
    }
    for (let i = 0; i < second_arr.length; i++){
        let item2 = second_arr[i];
        if (first_arr.includes(item2)){
            delete item2;
        } else {
            arr.push(item2);
        }
    }
    return arr;
}

console.log(findItem(first_arr, second_arr));