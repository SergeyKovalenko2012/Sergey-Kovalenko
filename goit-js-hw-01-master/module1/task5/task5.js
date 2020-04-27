"use strict";

const china = "Китай";
const chili = "Чили";
const australia = "Австалия";
const india = "Индия";
const jamaika = "Ямайка";

let price1 = 100;
let price2 = 250;
let price3 = 170;
let price4 = 80;
let price5 = 120;

let message;

let userChoise = prompt("Выберите страну!");
switch (userChoise) {
  case china:
    userChoise = alert(`Доставка в ${china} будет стоить ${price1} кредитов`);
    break;

  case chili:
    userChoise = alert(`Доставка в ${chili} будет стоить ${price2} кредитов`);
    break;

  case australia:
    userChoise = alert(
      `Доставка в ${australia} будет стоить ${price3} кредитов`
    );
    break;

  case india:
    userChoise = alert(`Доставка в ${india} будет стоить ${price4} кредитов`);
    break;

  case jamaika:
    userChoise = alert(`Доставка в ${jamaika} будет стоить ${price5} кредитов`);
    break;

  default:
    userChoise = alert("В вашей стране доставка не доступна");
}
