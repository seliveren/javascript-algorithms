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
    if (typeof(str1) === 'string' && typeof(str2) === 'string' && str1.length !== 0 && str2.length !== 0) {
        const firstString = str1.toLowerCase().split('');
        const secondString = str2.toLowerCase().split('');
        for (let i = 0; i < firstString.length; i++)
            if (firstString.length === secondString.length && firstString[i] === secondString[i] && firstString.join() !== secondString.join()) {
                return true
            } else {
                return false
            }
    } else {
        console.log('что-то здесь явно не так...')
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram( 'up', 'UP')); // false