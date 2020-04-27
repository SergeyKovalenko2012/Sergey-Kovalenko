"use strict";

let credits = 23580;

let pricePerDroir = 3000;

let totalPrice;

let total;

let countOrder = prompt("Сколько желаете приобрести дроидов?");

if (countOrder === null) {
  total = alert("Отменено пользователем!");
} else {
  totalPrice = pricePerDroir * countOrder;
}
if (!total) {
  if (credits - totalPrice <= 0) {
    alert("Недостаточно средств на счету!.");
  } else {
    credits = credits - totalPrice;
    alert(`Вы купили ${countOrder} дроидов, на счету осталось ${credits}`);
  }
}
