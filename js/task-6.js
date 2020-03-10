'use strict';

let input;
let total = 0;
const number = [];

do {
  input = prompt(`Введите число:`);
  let newNumber = number.push(Number(input));
  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
  }
} while (input !== null);
alert('Общая сумма чисел равна ' + total);
console.log(number);
