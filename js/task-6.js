'use strict';

let input;
let total = 0;
let number = [];

do {
  input = prompt(`Введите число:`);
  if (Number.isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    number.push(Number(input));
  }
} while (input !== null);

for (let i = 0; i < number.length; i++) {
  if (input === null) {
    total += number[i];
  }
  alert('Общая сумма чисел равна ' + total);
}
console.log(number);
