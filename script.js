import { add } from './modules_js/qosh.js';
import { subtract } from './modules_js/ayir.js';
import { multiply } from './modules_js/kopay.js';
import { divide } from './modules_js/bol.js';

window.calculate = function (operation) {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerText = 'Ikkala sonni kiriting!';
    return;
  }

  switch (operation) {
    case 'add':
      result = add(num1, num2);
      break;
    case 'subtract':
      result = subtract(num1, num2);
      break;
    case 'multiply':
      result = multiply(num1, num2);
      break;
    case 'divide':
      result = num2 === 0 ? '0 ga bo‘lish mumkin emas!' : divide(num1, num2);
      break;
    default:
      result = 'Nomaʼlum amal';
  }

  document.getElementById('result').innerText = `Natija: ${result}`;
};
