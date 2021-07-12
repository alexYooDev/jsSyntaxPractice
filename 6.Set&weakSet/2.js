// weakSet

// 참조를 가지고 있는 객체만 가능
// 객체형태를 중복없이 저장하려고 할 때 유용.

let ws = new WeakSet();

let arr = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let obj = { arr, arr2 };
ws.add(arr);
ws.add(arr2);
ws.add(obj);

arr = null;
// ws.add(111); // invalid type;
// ws.add('111'); // invalid type;
// ws.add(null); // invalid type;
// ws.add(undefined); // invalid type;
ws.add(function () {});
// 참조를 가지고 있는 객체만 가능하다는 의미 => 참조를 모니터링; 저장한 객체가 null이 되거나 필요가 없어지면 가비지 컬렉션 대생이 됨;

console.log(ws);
// arr 을 null로 저장 - > ws 안에 존재하는 것 처럼 보이지만 실제로 존재하지 않음 => 가비지 컬렉션
console.log(ws.has(arr), ws.has(arr2));
