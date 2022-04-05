console.log('Задача 1');

let a = 1, b = 1, c, d;

/*
++a - префиксная форма инкремента, увеличивает переменную на 1 и возвращает значение переменной, увеличенное на 1.
результ а=2, с=2
*/
c = ++a;
console.log(c);

/*
b++ - постфиксная форма инкремента, увеличивает переменную на 1 и возвращает значение переменной до применения инкрмента.
результ b=2, d=1
*/
d = b++;
console.log(d);

/*
++a - префиксная форма инкремента, увеличивает а на 1, а становится равным 3. с = 2 + 3
результ а=3, с=5
*/
c = 2 + ++a;
console.log(c);

/*
b++ - постфиксная форма инкремента, увеличивает b на 1, возвращает значение b до увеличения. d = 2 + 2
результ b=3, d=4
*/
d = 2 + b++;
console.log(d);

console.log(a);
console.log(b);

// -------------------------------------------------------------

console.log('Задача 2');

"use strict";

a = 2;
let x = 1 + (a *= 2);

/*
a *= 2 умножет значение а на 2 и присваетвает результат переменной а. Соответственнос а = 4, х = 1 + 4
результат х = 5, а = 4
 */

console.log(x);
console.log(a);

// -------------------------------------------------------------

alert('Задача 3');
a = prompt('Введите число a');
b = prompt('Введите число b');

function myCalc(a, b) {
    if (a * b < 0) {
        return Number(a) + Number(b); 
    }
    else if (a > 0 && b > 0){
        return a - b;
    }
    else if (a < 0 && b < 0){
        return a * b;
    }
}
console.log(`для чисел ${a} и ${b} рузультат ${myCalc(a, b)}`);

// -------------------------------------------------------------

console.log('Задача 4');


function sub(a, b) {
    (a >= b) ? res = a - b : res = b - a;
    return res;  
}

const sum = (a, b) => {return a + b};
const mult = (a, b) => {return a * b};
const div = (a, b) => {return a / b};

// -------------------------------------------------------------

console.log('Задача 5');

function declinationOfNumber(num, wordsForm1, wordsForm2, wordsForm3) {
    if (num == 1){
        rightForm = wordsForm1;
    }
    else if (num >= 5){
        rightForm = wordsForm3;
    }
    else {
        rightForm = wordsForm2;
    }
    console.log(`У меня есть ${num} ${rightForm}.`);
}

const word = declinationOfNumber(5, "яблоко", "яблока", "яблок");