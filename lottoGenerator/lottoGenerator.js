let lottoBalls = [];
let numbers = [];
let bonusNum = 0;

const $btn = document.querySelector('#push');
const $ballScreen = document.querySelector('#ballScreen');
const $bonusBall = document.querySelector('#bonusBall');
const $resetBtn = document.querySelector('#resetBtn');

function generateNum() {
  numbers = Array(45)
    .fill(0)
    .map((element, i) => {
      return i + 1;
    });

  while (numbers.length > 39) {
    let tmp = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];
    lottoBalls.push(tmp);
  }
  bonusNum = numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0];

  $btn.classList.add('invisible');
  $ballScreen.classList.add('visible');
  $bonusBall.classList.add('visible');
  $resetBtn.classList.remove('invisible');

  for (let i = 0; i < lottoBalls.length; i++) {
    let ball = document.createTextNode(` ${lottoBalls[i]}`);
    $ballScreen.appendChild(ball);
  }

  $bonusBall.append(` ${bonusNum}`);
  console.log(lottoBalls);
  console.log(bonusNum);
  console.log(numbers);
}

function reset() {
  location.reload();
}

$btn.addEventListener('click', generateNum);
$resetBtn.addEventListener('click', reset);
