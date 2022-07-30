/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let res = str.split(' ');
    for(let i = 0; i < res.length; i++)
        res[i] = res[i].slice(0, 1).toUpperCase() + res[i].slice(1, );
    return res.join(' ')
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"