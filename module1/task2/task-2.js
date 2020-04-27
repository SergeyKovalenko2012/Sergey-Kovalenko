"use strict";

const total = 100;

const ordered = 50;

const value = 5;

const isInRange = value >= 1 && value <= 50;

if (isInRange) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
  console.log("На складе недостаточно товаров!");
}
