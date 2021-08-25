// 배열을 객체로 만들기 (배열을 강력하게 조작할 수 있는 reduce 메서드)
// a: 누적값 c:현재값 i:인덱스
let menu = ['Ham', 'Egg', 'Sausage', 'Coke'].reduce((a, c, i) => {
  a[i] = c;
  return a;
});
/*
a: {}, c: 'Ham' i: 0
a: {0:'Ham}, c: 'Egg', i: 1
a: {0: 'Ham', 1:'Egg'}, c: 'Sausage, i: 2
a: {0: 'Ham', 1:'Egg', 2:'Sausage}, c: 'Coke', i: 3
= > {0: 'Ham', 1:'Egg', 2:'Sausage, 3:'Coke'}
*/

console.log(menu);
