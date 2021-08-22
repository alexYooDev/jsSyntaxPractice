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
const rockXCoord = '0px';
const paperXCoord = '190px';
const scissorsXCoord = '-180px';

$computer.style.background = `url(${IMG_URL}) -180px 0`;
$computer.style.backgroundSize = 'auto 200px';
