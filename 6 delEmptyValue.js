//delEmptyValue([NaN, 0, 15, false, -22, '',undefined, 47, null])
let arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function delEmptyValue() {
    for (let i = 0; i < arr.length; i++) {
       if (Boolean(arr[i]) === false) {
           arr.splice([i], 1);
        }
    }
    return arr;
}

console.log(delEmptyValue(arr));