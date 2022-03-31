/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    let res = [];
    if (arr1.length < arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if ((arr2.indexOf(arr1[i]) > -1) && (res.indexOf(arr1[i]) === -1)) {
                res.push(arr1[i]);
            };
        }
    } else {
        for (let i = 0; i < arr2.length; i++) {
            if ((arr1.indexOf(arr2[i]) > -1) && (res.indexOf(arr1[i]) === -1)) {
                res.push(arr2[i])
            };
        }
    }
    
    return res
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []