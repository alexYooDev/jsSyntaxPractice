const $input = document
  .querySelector('input')
  .addEventListener('input', (event) => {
    console.log(event.target.value);
  });

//callback function = 어떤 기능을 수행한 다음 연이어 실행되는 함수.
//callback function이 여러번 재사용 될 경우, 변수로 내어 저장하는 것이 좋음.
// 코드를 작성할 때는 절차적으로 순서도를 그려 컴퓨테이셔널 사고력을 기르는 것이 중요.

const $buttom = document
  .querySelector('button')
  .addEventListener('click', () => {
    console.log('clicked');
  });
