"use strict";
let input;

let total = 0;

do {
  input = +prompt("Введите число");
  total += input;
} while (input);

alert("Общая сумма чисел равна [" + total + "]");
