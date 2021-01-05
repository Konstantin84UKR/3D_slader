const ADMIN_PASSWORD = "adminpass";
let message;

let result = prompt("Введите пароль", "");

if (result === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else if (result == null) {
  message = "Отменено пользователем!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);
