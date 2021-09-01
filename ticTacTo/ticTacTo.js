/**
 * 시작 -> 화면에 틱택토 판 보여줌 ( 3X3 )
 * 판 내 블럭 클릭 -> myChoice 변수에 위치 저장 (e.g. [0][1] 가장 위 가운데) 해당 지점에 O를 그린다.
 * 다음 차례는 상대 편 변수를 otherChoice로 바꾸어 클릭한 위치 저장. 해당지점에 X를 그린다.
 * 한줄, 대각선 이 완성되는 쪽이 승리 : 점수 획득 (카운트)
 *
 *  */
const data = [];
for (let i = 0; i < 3; i++) {
  data.push([]);
}
const $table = document.createElement('table');
$table.id = 'table';
for (let i = 0; i < 3; i++) {
  const $tr = document.createElement('tr');
  $table.append($tr);
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement('td');
    $tr.append($td);
  }
}
document.body.append($table);
