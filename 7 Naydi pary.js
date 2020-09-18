/*
7. НАйди пару - на вход получаешь массив [10,20,10,40,50,60,70]
и число «50» вывести все возможные варианты ( в виде индексов)
сложения чисел в массиве что бы вышло введенное число (например {0, 3}, {2,3})
*/
//TODO: use forEach for findSumEqual function (slice)

let arr = [10,20,10,40,50,60,70,30];
let num = 50;

function findSumEqual(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
            for (let t = i; t < arr.length; t++) {
                if (arr[i] + arr[t] === num) {
                    result.push(`${i} ${t}`);
                }
            }
    }
return result;
}

console.log(findSumEqual(arr, num));
