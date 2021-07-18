function chkFirstPlayer(word) {
  word = newWord;
  $word.textContent = word;
  $input.value = '';
  $input.focus();
}

// 첫번째 단어
let word;
// 다음 순서 단어
let newWord;
let order;

const number = Number(prompt('몇 명이 참가하나요?'));
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
//callback function = 어떤 기능을 수행한 다음 연이어 실행되는 함수.
//callback function이 여러번 재사용 될 경우, 변수로 내어 저장하는 것이 좋음.
// 코드를 작성할 때는 절차적으로 순서도를 그려 컴퓨테이셔널 사고력을 기르는 것이 중요.

function onClick() {
  if (!word) {
    // 데이터를 바꾸면 화면도 바꾸어 주어야 함 (이 두가지는 항상 같이 따라와야 함)
    word = newWord;
    $word.textContent = word;
    $input.value = '';
    $input.focus();
    let order = parseInt($order.textContent); // 현재 순서
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
    // input등의 입력값은 value를 변경해야 함.
  } else {
    // 제시어의 마지막 인덱스 값이 새로운 단어의 첫글짜가 같냐?
    if (word[word.length - 1] === newWord[0]) {
      // 맞는 단어: 그렇다면 새로운 단어를 제시어로 변경
      word = newWord;
      $word.textContent = word;
      $input.value = '';
      $input.focus();
      let order = parseInt($order.textContent); // 현재 순서
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    } else {
      // 틀린 단어: 오답 메시지
      alert('Wrong answer!');
      word = '';
      $word.textContent = word;
      $input.value = '';
      $input.focus();
      let order = parseInt($order.textContent); // 현재 순서
      if (order + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = order + 1;
      }
    }
  }
}

function onInput(event) {
  newWord = event.target.value;
}

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClick);
