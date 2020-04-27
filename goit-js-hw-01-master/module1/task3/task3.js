"use strict";

const ADMIN_PASWORD = "admin";

let userInput = prompt("Введите пароль");

if (userInput === null) {
  userInput = confirm("Отменено пользователем!");
} else if (userInput === ADMIN_PASWORD) {
  userInput = confirm("Добро пожаловать!");
} else {
  userInput = confirm("Неверный пароль!");
}

// if (userInput) {
//     default:
//       message = "Неверный пароль";
//   }

alert(userInput);
