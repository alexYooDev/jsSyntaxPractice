//map & WeakMap
// Array = 개선 => set, weakSet;
// Object = 개선 => map, weakMap;

//map은 key:value 구조

let wm = new WeakMap();

let myFunc = function () {};

// 이 함수가 얼마나 실행됬는지 확인.

wm.set(myFunc, 0);

let count = 0;
for (let i = 0; i < 10; i++) {
  count = wm.get(myFunc); //get value
  count++;
  wm.set(myFunc, count);
}

console.log(wm.get(myFunc));
myFunc = null;
// 초기화 이후 값은 없음
console.log(wm.get(myFunc));
console.log(wm.has(myFunc));

// weakMap => key/value 구조로 객체에 대한 추가적인 정보를 넣을 때 유용, obj 타입을 중복없이 사용할 때 유용
