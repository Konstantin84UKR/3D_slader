// const total = 100;
// const ordered = 50;

const total = prompt(`Укажите количество товаров в заказе)`);
const ordered = prompt(`Укажите остаток на складе)`);

if (total < ordered) {
  alert("На складе недостаточно твоаров!");
} else {
  alert("Заказ оформлен, с вами свяжется менеджер");
}
