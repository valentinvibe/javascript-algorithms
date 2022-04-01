/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const str1Len = str1.length,
          str2Len = str2.length;
    let count = 0;
    if (str1Len !== str2Len) {
        return false
    }
    for (let i = 0; i < str1Len; i++) {
        if (str1[i] === str2[i]) {
            count++;
        }
    if (count === str1Len) {
        return false
    }
    }
    for (let i=1; i < str1Len; i++) {
        if (str2.indexOf(str1[i]) !== -1) {
            continue;
        } else {
            return false
        }
    }
    return true
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('aba', 'ba')); 
console.log(anagram('up', 'UP')); 