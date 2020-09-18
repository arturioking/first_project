//Удалаление дубликатов: cпособ с использованием Set + через объект (преобразовать маассив в объект записывая только
//уникальные значения.

let array = [1,5,3,3,3,6,3,5,4,3,2,2,2,2,2,1,9];

function deleteDuplicate(array) {
    return [...new Set(array)];
}

function byObject(array) {
    const hash = {};

    array.forEach((item) => {
        if(!hash[item]) {
            hash[item] = item;
        }
    });

    return Object.values(hash);
}

function byArray(array) {
    const result = [];

    array.forEach((item) => {
        if(!result.includes(item)) result.push(item);
    });

    return result;
}


console.log(deleteDuplicate(array));
console.log(byObject(array));
console.log(byArray(array));
