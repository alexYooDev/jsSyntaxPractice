// 숫자 30이 넘어가면 CS 알고리즘으로 문제를 푸는 것이 더 효율적
// math.random은 암호학적으로 완전한 무작위가 아니기 때문에
// 보안과 관ㄹ현된 작업은 window.crypto.getRandomValues() 함수를 쓰는 편이 안전하다.

const target = [];
const numbers = [];
const answer = [];
const $answer = document.querySelector('#answer');
const $form = document.querySelector('#form');
const $log = document.querySelector('#log');

for (let n = 0; n < 9; n++) {
  numbers.push(n + 1);
}

for (let i = 0; i < 4; i++) {
  const idx = Math.floor(Math.random() * (numbers.length - i));
  target.push(numbers[idx]);
  numbers.splice(idx, 1);
}

function onSubmit(event) {
  if (
    event.target.value.length !== 4 &&
    Number(event.target.value) == 'number'
  ) {
    alert('숫자 4개를 입력하십시오.');
  } else {
    answer.push(event.target.value);
  }
  console.log(answer);
}

$answer.addEventListener('submit', onSubmit);
// 중복이 없어야 함

// while (target.length < 4) {
//   target.add(parseInt(Math.random() * 9 + 1));
// }

// console.log(target);
