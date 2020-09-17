//Удалаление дубликатов: cпособ с использованием Set + через объект (преобразовать маассив в объект записывая только
//уникальные значения.

let array = [1,5,3,3,3,6,3,5,4,3,2,2,2,2,2,1,9];

function deleteDublicate(array) {
    return Array.from(new Set(array));
}


function byObject(array) {
    let obj = Object.assign({}, Array.from(new Set(array)));
    return obj;
}



console.log(deleteDublicate(array));
console.log(byObject(array));