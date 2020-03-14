'use strict';

let input;
let total = 0;
const number = [];

do {
  input = prompt('Введите число: ');
  if (input === null) {
    break;
  }
  if (!Number.isNaN(Number(input))) {
    number.push(Number(input));
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== null);

if (number.length > 0) {
  for (let i = 0; i < number.length; i++) {
    total += number[i];
  }
  alert(`Общая сумма чисел равна ${total}`);
  console.log(number);
}
