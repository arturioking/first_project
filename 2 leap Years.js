//С такой даты по такую вывести все высокосные года -> function leapYears(min,max)
//Написать функцию leepYear которая принимает год и проверяет его на високосность

function leapYears(min,max) {
    let years = [];
    while (min <= max) {
        years.push(min++);
    }
    return years.filter(year => (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0));
}

console.log(leapYears(2012, 2022));