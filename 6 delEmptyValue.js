//delEmptyValue([NaN, 0, 15, false, -22, '',undefined, 47, null])
//TODO: return only numbers in new array
let arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function delEmptyValue(arr) {
    for (let i = 0; i < arr.length; i++) {
       if (Boolean(arr[i]) === false) {
           arr.splice([i], 1);
        }
    }
    return arr;
}

function returnOnlyNumbers(arr) {
    const result = [];
    arr.forEach((item) => {
        if (!!item) {
            result.push(parseInt(item,10));
        } if (item === 0) {
            result.push(parseInt(item,10));
        }
    });
    return result;
}

console.log(delEmptyValue(arr));
console.log(returnOnlyNumbers(arr));
