let word;
let newWord;
let number = Number(prompt('How many players?'));

const $order = document.querySelector('#order');
const $word = document.querySelector('#word');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

function onClick() {
  if (!word || word[word.length - 1] === newWord[0]) {
    if (newWord.length === 3) {
      word = newWord;
      $word.textContent = word;
      let order = parseInt($order.textContent);
      setOrder(order);
    } else {
      alert('3 syllables only!');
    }
    // 오답일 경우
  } else {
    alert('wrond answer!');
    word = '';
    $word.textContent = '';
    let order = parseInt($order.textContent);
    setOrder(order);
  }
  $input.value = '';
  $input.focus();
}

function setOrder(order) {
  if (order + 1 > number) {
    $order.textContent = 1;
    return $order.textContent;
  } else {
    $order.textContent = order + 1;
    return $order.textContent;
  }
}

function onInput(event) {
  newWord = event.target.value;
}

$input.addEventListener('input', onInput);
$button.addEventListener('click', onClick);
