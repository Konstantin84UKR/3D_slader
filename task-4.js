let credits = 35500;
let pricePerDroid = 3000;
let totalPrice = 0;
let accountBalanceTemp;



while (true) {

  let result = prompt(
  `Укажите количество дройдов (цена за штуку ${pricePerDroid})`
);
if (result == null) {
    console.log("Отменено пользователем!");
    alert("Отменено пользователем!");
    break;
}

result = parseInt(result);
if (result) {
  totalPrice = pricePerDroid * result;
  accountBalanceTemp = credits - totalPrice;
}
  
  if (isNaN(result)) {
    console.log("Введенно не число!");
    alert("Введенно не число!");
  } else if (accountBalanceTemp >= 0) {
    credits = accountBalanceTemp;
    alert(`Вы купили ${result} дроидов, на счету осталось ${credits} кредитов`);
  } else if (accountBalanceTemp < 0) {
    console.log("Недостаточно средств на счету!");
    alert("Недостаточно средств на счету!");
  }

}
