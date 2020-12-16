'use strict'

/**
 * Функция sum складывает параметры a и b;
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Возвращает так же число, складывая данные параметры.
 */

function sum (a, b) {
    return a + b;
}

/**
 * Функция sub вычитает из параметра a параметр b;
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Возвращает так же число, вычитая данные параметры.
 */

function sub (a, b) {
    return a - b;
}

/**
 * Функция multiplier перемножает параметры a и b;
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Возвращает так же число, умножая данные параметры.
 */

function multiplier (a, b) {
    return a * b;
}

/**
 * Функция division делит параметр "a" на параметр "b";
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Возвращает так же число, поделив данные параметры.
 */

function division (a, b) {
    return a / b;
}

/**
 * Функция получает два числа и осуществляет над ними математическую операцию;
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+", "-", "*", "/".
 * @throws {Error} если передана непредусмотренная операция, то будет выброшена ошибка.
 * @returns {number} 
 */

function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case "+": 
        return sum (arg1, arg2);
        case "-": 
        return sub (arg1, arg2);
        case "*": 
        return multiplier (arg1, arg2);
        case "/": 
        return division (arg1, arg2);
        default:
            throw new Error("Данная операция " + operation + " неизвестна"); 
    }
}

console.log (mathOperation (5, 10, "+"));
console.log (mathOperation (5, 10, "-"));
console.log (mathOperation (5, 10, "*"));
console.log (mathOperation (5, 10, "/"));
console.log (mathOperation (5, 10, "lorem"));