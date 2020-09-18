//С такой даты по такую вывести все высокосные года -> function leapYears(min,max)
//Написать функцию leepYear которая принимает год и проверяет его на високосность

function leapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
}

function task2(min, max) {
    const years = [];

    while (min <= max) {
        if(leapYear(min)) years.push(min);
        min++;
    }
    return years;
}

console.log(task2(2012, 2022));
