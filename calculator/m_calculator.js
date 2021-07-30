let numOne = '';
let numTwo = '';
let operator = '';
const $numOne_txt = document.querySelector('#numOne_txt');
const $numTwo_txt = document.querySelector('#numTwo_txt');
const $operator_txt = document.querySelector('#operator');
const $answer_txt = document.querySelector('#answer_txt');
const $btn = document.querySelectorAll('button');

// 고차함수의 매개변수 event는 브라우저가 넣어주는 것
// => 는 return 과 중괄호 (braces)를 생략한 것
const onClickNumber = () => {
  if (!operator) {
    numOne += $btn.textContent;
    $numOne_txt.textContent += numTwo;
    return; // 함수 종료
    $numTwo_txt.textContent += numOne;
    numTwo += $btn.textContent;
  }
};

const onClickOperator = (op) => {
  if (numOne) {
    operator = op;
    $operator_txt.textContent = operator;
  } else {
    alert('type the number first');
  }
};

for (let i = 0; i < $btn.length; i++) {
  if (isNaN($btn[i].textContent) && $btn[i].textContent !== '=') {
    $btn[i].addEventListener('click', onClickOperator);
  } else {
    //eventListener의 고차함수는 브라우저가 대신 실행한다. onClickNumber();
    $btn[i].addEventListener('click', onClickNumber);
  }
}
