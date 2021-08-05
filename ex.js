// 2~5까지 숫자 뽑기

// const answer = [];
// for (let i = 0; i < 4; i++) {
//   answer.push(i + 2);
// } = 4

// const answer = [];
// for (let i = 0; i <= 3; i++) {
//   answer.push(i + 2);
// } = 3

// const answer = [];
// for (let i = 1; i < 5; i++) {
//   answer.push(i + 1);
// } = 5

// const answer = [];
// for (let i = 1; i <= 4; i++) {
//   answer.push(i + 1);
// } = 4

// console.log(answer);

// const answer = [3, 1, 4, 6];
// const value = '3214';
// let strike = 0;
// let ball = 0;

// //배열의 메서드는 일반적인 for문 보다는 성능은 떨어지지만,
// //연계하여 사용했을 때 편리성이 있음
// answer.forEach((element, i) => {
//   // 일치하는 것이 없다면 -1, 있다면 0 이상
//   const index = value.indexOf(element);
//   //같은 숫자가 있는 경우
//   if (index > -1) {
//     // 인덱스가 일치하면
//     if (index === i) {
//       strike++;
//     } else {
//       ball++;
//     }
//   }
// });
// console.log(`strike: ${strike}`);
// console.log(`ball: ${ball}`);

//2를 곱한 결과를 가져오고 싶다. -> 순회한 결과를 반영한 새로운 배열 리턴. (기존 배열은 변하지 않는다.)
const array = [1, 2, 3, 4];
array.map((element, i) => {
  return element * 2;
});

//왜 쓰는가? : 연달아서 기능을 실행할 수 있음.
