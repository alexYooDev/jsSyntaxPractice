'use strict';
/**
 * 시작 -> 화면에 틱택토 판 보여줌 ( 3X3 )
 * 판 내 블럭 클릭 -> myChoice 변수에 위치 저장 (e.g. [0][1] 가장 위 가운데) 해당 지점에 O를 그린다.
 * 다음 차례는 상대 편 변수를 otherChoice로 바꾸어 클릭한 위치 저장. 해당지점에 X를 그린다.
 * 한줄, 대각선 이 완성되는 쪽이 승리 : 점수 획득 (카운트)
 *
 * Destructuring :
 * const arr = [1,2,3,4,5];
 * const [one, two, three, four, five] = arr (특정요소 비선택시 빈칸으로)
 *  */
// == const body = document.body : 구조분해할당 (디스트럭쳐링)
// 어떤 객체의 속성 명이 같은 변수를 선언할 떄 사용
const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');
let turn = 'O';

// 각 칸을 클릭 이벤트 발생 시
const shiftOX = (event) => {
  // 클릭한 칸이 차 있다면 (removeEventlistener를 사용하면 실수 확률 => 조건으로 처리)
  if (event.target.textContent !== '') {
    return;
  } else {
    // turn 이 바뀔 때 마다 O 와 X를 교차
    event.target.textContent = turn;
    // 삼항연산자로 축약
    turn = turn === 'O' ? 'X' : 'O';
  }
};

const rows = [];
for (let i = 0; i < 3; i++) {
  const $tr = document.createElement('tr');
  const cells = [];
  for (let j = 1; j <= 3; j++) {
    const $td = document.createElement('td');
    cells.push($td);
    $td.addEventListener('click', shiftOX);
    $tr.appendChild($td);
  }
  rows.push(cells);
  $table.appendChild($tr);
}

body.append($table);
body.append($result);

// 승리 조건 :
//요소의 i 값이 전부 다르고, j값의 차가 1인 경우
// i의 값이 전부 다르고, j 값이 같을 경우
// i의 값이 같고 j의 차가 1인 경우
