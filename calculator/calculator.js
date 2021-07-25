let numOne;
let numTwo;
let operator;
let answer;

const $numOne_txt = document.querySelector('#numOne_txt');
const $numTwo_txt = document.querySelector('#numTwo_txt');
const $operator_txt = document.querySelector('#operator_txt');
const $answer_txt = document.querySelector('#answer_txt');
const $btn = document.querySelectorAll('button');

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
    numOne = '';
    numTwo = '';
    operator = '';
  } else {
    if (!operator) {
      $numOne_txt.textContent = numOne;
      $numTwo_txt.textContent = numTwo;
      $operator_txt.textContent = operator;
      if (!numOne) {
        numOne = Number(event.target.textContent);
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
}

for (let i = 0; i < $btn.length; i++) {
  $btn[i].addEventListener('click', onClick);
}
