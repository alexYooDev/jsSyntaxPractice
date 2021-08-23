/*
파란화면으로 시작. 파란 화면을 클릭하면 빨간 화면으로 전환되고 타이머 시작.
랜덤한 시간에 타이머가 좀료되면서, 초록색 화면으로 전환. 2차 타이머 시작.
초록색 화면 클릭 시, 타이머 종료 => 종료 시간을 변수에 저장. 초록색 화면이 시작한 시간과 끝난 시간의 차를 표시
다시 파란색 화면으로 돌아감.

*/

const $screen = document.querySelector('#screen');

function onClick() {
  if ($screen.className === 'ready') {
    $screen.className = 'set';
    $screen.textContent = '';
  } else if ($screen.className === 'set') {
    $screen.className = 'go';
  } else {
    $screen.className = 'ready';
    $screen.textContent = 'Click to start';
  }
}

$screen.addEventListener('click', onClick);
