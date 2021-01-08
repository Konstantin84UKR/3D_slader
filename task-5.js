let country_of_delivery = "";
let delivery_price;

let result = prompt(`Укажите страну доставки)`);

result = result.toLowerCase().trim();

switch (result) {
  case "китай":
    country_of_delivery = "Китай";
    delivery_price = 150;
    break;

  case "чили":
    country_of_delivery = "Чили";
    delivery_price = 250;
    break;

  case "австралия":
    country_of_delivery = "Австралия";
    delivery_price = 165;
    break;

  case "индия":
    country_of_delivery = "Индия";
    delivery_price = 90;
    break;

  case "ямайка":
    country_of_delivery = "Ямайка";
    delivery_price = 130;
    break;

  default:
    country_of_delivery = null;
    delivery_price = null;
    break;
}

if (country_of_delivery != null) {
  alert(
    `Доставка в ${country_of_delivery} будет стоить ${delivery_price} кредитов.`
  );
} else {
  alert("В вашей стране доставка не доступна.");
}
