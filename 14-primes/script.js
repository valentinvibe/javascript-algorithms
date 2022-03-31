/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/
6
1 2 3 4 5 6

+6/2 = 0 
+6/3 = 0
6/4 = 2
+6/5 = 1
6/6 = 0

function primes(num) {
    let res = [];
    
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                
            }
            res.push()
        }
        
    }
    return res
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
//console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]



const values = [56, 78, 100],
      sum = 7777,
      result = [];
let temp = 0;

result[2] = Math.trunc(sum / values[2]);
temp = sum - (result[2] * values[2]);
result[1] = Math.trunc(temp / values[1]);
temp = temp - (result[1] * values[1]);
result[0] = Math.trunc(temp / values[0]);
console.log(result);

console.assert(add(3,4) === 7, 'sdgdfgdfg');