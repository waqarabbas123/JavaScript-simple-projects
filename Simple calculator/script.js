const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');
const clear = document.getElementById('clear');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');

add.addEventListener('click', () => {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const sum = num1Value + num2Value;
  result.value = sum;
});

subtract.addEventListener('click', () => {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const difference = num1Value - num2Value;
  result.value = difference;
});

multiply.addEventListener('click', () => {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const product = num1Value * num2Value;
  result.value = product;
});

divide.addEventListener('click', () => {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  if (num2Value !== 0) {
    const quotient = num1Value / num2Value;
    result.value = quotient;
  } else {
    result.value = 'Error: Division by zero';
  }
});

clear.addEventListener('click', () => {
  num1.value = '';
  num2.value = '';
  result.value = '';
});