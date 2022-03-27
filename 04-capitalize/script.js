/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if (!str || str === ' ') {
        return str
    }
    str = str.replace(/\s\s+/g, ' ').split(' ');
    for (let i=0;i<str.length;i++) {
        if (str[i] === '') {
            continue;
        } else {
            str[i] = str[i][0].toUpperCase() + str[i].slice(1);
        } 
    }
    str = str.join(' ');
    return str
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"