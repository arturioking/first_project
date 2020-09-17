/*
8. Заполнить массив случайными числами, функция принимает
(Мин значение, максимальное, и количество элементов, bool: с повторениями или без)
если невозможно заполнить массив выбросить ошибку с текстом «Входные данные некоректны»
*/
function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNoReps(min, max, megaArr) {
    let n = getRandomIntInclusive(min,max);
    if (megaArr.includes(n)) {
        return getNoReps(min, max, megaArr);
    }
    return n;
}

function createArr(min,max,long,reps) {
    let megaArr = [];

    if (min + max <= long && !reps) {
        throw 'Uncorrect data!';
    }

    for (let i = 0; i < long; i++) {
        if (reps) {
            megaArr.push(getRandomIntInclusive(min, max));
        } else {
            megaArr.push(getNoReps(min, max, megaArr));
        }
    }
    return megaArr;
}

try{
    console.log(createArr(3,9,5,true));
} catch (e) {
    console.log(e);
}



















/*let arr = [];
let min = arr.min;
let max = arr.max;

function getRandomIntInclusive() {
    arr.min = Math.ceil(min);
    arr.max = Math.floor(max);
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function createArr(min, max, length, reps) {
    arr.min = min;
    arr.max = max;
    arr.length = length;
    arr.reps = reps;
    for (let i = 0; i <= arr.length; i++) {
        arr.push(getRandomIntInclusive());
        return arr;
    }
}

console.log(createArr(3,7,5,true));*/
//console.log(getRandomIntInclusive(arr));
