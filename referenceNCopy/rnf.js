const a = [];
const b = 'hello';
const c = {};

//b = 원시값, a,c = 객체
// 원시값은 복사가 되고, 객체는 참조가 된다. 객체마저 참조관계를 끊고 싶다면 깊은 복사 사용
const arr = [a, b, c];

// 참조
const first = arr;

// 참조된 값을 수정하면
first[1] = 'one';

//원본도 바뀜
console.log(arr[1]); // one

// 얕은 복사
const sec = [...arr];

// 값을 수정해도 바뀌지 않음
sec[1] = 'fool';

console.log(arr[1]);

// 배열의 경우 변경사항이 반영된다.
sec[0].push(1);
console.log(arr[0]);

// 깊은 복사: 객체의 참조관계도 끊어주고 값만 복사가 가능하다.
// 아래의 방식은 간단히 깊은 복사를 할 수 있지만, 성능도 느리고, Math나 Date 같은 객체는 복사할 수 없다.
// 실무에서 깊은 복사를 할 때에는 lodash같은 라이브러리를 사용
const third = JSON.parse(JSON.stringify(arr));

third[0].push(2);
console.log(arr[0]);
console.log(third[1]);
console.log(third[0]);

//예를 들어 array.slice 메서드는 얕은 복사이고, array.splice는 참조하는 메서드임.
