let total = 0;
let result = null;

do {
  result = prompt(`Введите число, текушее значение total = ${total}`);
  let resultNumber = Number(result);
  if (!Number.isNaN(resultNumber)) {
    total += resultNumber;
  } else {
    result = null;
  }
} while (result != null);

alert(`total = ${total}`);
