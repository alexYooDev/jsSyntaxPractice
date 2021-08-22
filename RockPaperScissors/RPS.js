'use strict';

const $computer = document.querySelector('#computer');
const $rock = document.querySelector('#rock');
const $paper = document.querySelector('#paper');
const $scissors = document.querySelector('#scissors');
const $score = document.querySelector('#score');

// 서버 개발에서는 root경로(/)를 사용하는 경우가 많으나,
// 서버를 사용하지 않는 경우엔 상대 경로 (./)를 사용
const IMG_URL = './rps.png';

// image sprite: 한 이미지 내 보여 줄 부분을 나눔: 자를 부분을 픽셀로 조정
$computer.style.background = `url(${IMG_URL}) -180px 0`;
$computer.style.backgroundSize = 'auto 200px';

// 변수는 고유한 것, 묶을 수 있는 것은 객체로
const rspXcoord = {
  rock: '0',
  paper: '190',
  scissors: '-180',
};

let computerChoice = 'rock';

// 함수화??
const shiftHands = () => {
  if (computerChoice === 'rock') {
    computerChoice = 'paper';
  } else if (computerChoice === 'paper') {
    computerChoice = 'scissors';
  } else if (computerChoice === 'scissors') {
    computerChoice = 'rock';
  }
  // 객체의 값에 접근하려면 => 객체[키]로 접근해야 한다.
  $computer.style.background = `url(${IMG_URL}) ${rspXcoord[computerChoice]}px 0 / auto 200px`;
};

// 0.05초로 설정을 하였지만, 코드 실행시간이 더 걸릴 경우, 정확히 0.05초 간격으로 반복되지 않는다.
setInterval(shiftHands, 50);
