/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    let res = [];
    for (let i = 2; i <= num; i++) {
            res[i] = res.push(num[i]);
        if (res[i] <= 1) delete res[i];
        if (res[i] % 2 === 0 && res[i] > 2) delete res[i];
        for (let i = 3; i <= Math.sqrt(res[i]); i += 2) {
        if (res[i] % i === 0) delete res[i];}
    }

    return res;

}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]