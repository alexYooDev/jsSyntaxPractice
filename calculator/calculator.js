let numOne;
let numTwo;
let operator;
let answer;

const $numOne_txt = document.querySelector('#numOne_txt');
const $numTwo_txt = document.querySelector('#numTwo_txt');
const $operator_txt = document.querySelector('#operator_txt');
const $answer_txt = document.querySelector('#answer_txt');
const $btn_1 = document.querySelector('#btn_1');
const $btn_2 = document.querySelector('#btn_2');
const $btn_3 = document.querySelector('#btn_3');
const $btn_4 = document.querySelector('#btn_4');
const $btn_5 = document.querySelector('#btn_5');
const $btn_6 = document.querySelector('#btn_6');
const $btn_7 = document.querySelector('#btn_7');
const $btn_8 = document.querySelector('#btn_8');
const $btn_9 = document.querySelector('#btn_9');
const $btn_0 = document.querySelector('#btn_0');
const $btn_plus = document.querySelector('#btn_plus');
const $btn_minus = document.querySelector('#btn_minus');
const $btn_multiply = document.querySelector('#btn_multiply');
const $btn_divide = document.querySelector('#btn_divide');
const $btn_result = document.querySelector('#btn_result');

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

function onClick(event) {
  // 두 번째 조건이 false 가 되버린다 =. 해결요함
  if (isNaN(event.target.textContent) && event.target.textContent !== '=') {
    if (!numOne);
    else operator = event.target.textContent;
    $operator_txt.textContent = operator;
  } else if (event.target.textContent === '=') {
    if (operator === '+') {
      answer = sum(numOne, numTwo);
    } else if (operator === '-') {
      answer = sub(numOne, numTwo);
    } else if (operator === '*') {
      answer = mul(numOne, numTwo);
    } else if (operator === '/') {
      answer = div(numOne, numTwo);
    }
    $answer_txt.textContent = answer;
  } else {
    if (!operator) {
      if (!numOne) {
        numOne = event.target.textContent;
      } else {
        numOne += event.target.textContent;
        numOne = Number(numOne);
      }
      $numOne_txt.textContent = numOne;
    } else {
      if (!numTwo) {
        numTwo = Number(event.target.textContent);
      } else {
        numTwo += event.target.textContent;
        numTwo = Number(numTwo);
      }
      $numTwo_txt.textContent = numTwo;
    }
  }

  console.log(numOne);
  console.log(operator);
  console.log(numTwo);
  console.log(answer);
}

$btn_1.addEventListener('click', onClick);
$btn_2.addEventListener('click', onClick);
$btn_3.addEventListener('click', onClick);
$btn_4.addEventListener('click', onClick);
$btn_5.addEventListener('click', onClick);
$btn_6.addEventListener('click', onClick);
$btn_7.addEventListener('click', onClick);
$btn_8.addEventListener('click', onClick);
$btn_9.addEventListener('click', onClick);
$btn_0.addEventListener('click', onClick);
$btn_plus.addEventListener('click', onClick);
$btn_minus.addEventListener('click', onClick);
$btn_multiply.addEventListener('click', onClick);
$btn_divide.addEventListener('click', onClick);
$btn_result.addEventListener('click', onClick);
