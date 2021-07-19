// 첫번째 단어
let word;
// 다음 순서 단어
let newWord;
const count = 0;

const number = Number(prompt('몇 명이 참가하나요?'));
const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
//callback function = 어떤 기능을 수행한 다음 연이어 실행되는 함수.
//callback function이 여러번 재사용 될 경우, 변수로 내어 저장하는 것이 좋음.
// 코드를 작성할 때는 절차적으로 순서도를 그려 컴퓨테이셔널 사고력을 기르는 것이 중요.

function setOrder(order) {
  if (order + 1 > number) {
    $order.textContent = 1;
    return $order.textContent;
  } else {
    $order.textContent = order + 1;
    return $order.textContent;
  }
}

function onClick() {
  if (!word || word[word.length - 1] === newWord[0]) {
    // 데이터를 바꾸면 화면도 바꾸어 주어야 함 (이 두가지는 항상 같이 따라와야 함)
    if (newWord.length === 3) {
      word = newWord;
      $word.textContent = word;
      const order = parseInt($order.textContent); // 현재 순서
      setOrder(order);
      count++;
    } else {
      alert('exceeded 3 syllables');
    }
    // input등의 입력값은 value를 변경해야 함.
  } else {
    // 틀린 단어: 오답 메시지
    alert(`Wrong answer! Time Successful: ${count}`);
    word = '';
    $word.textContent = word;
    count = 0;
    const order = parseInt($order.textContent); // 현재 순서
    setOrder(order);
  }
  $input.value = '';
  $input.focus();
}

function onInput(event) {
  newWord = event.target.value;
}

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClick);
