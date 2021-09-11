const a = 'b';
const c = ['b', true, 1];
const e = { g: 'h' };
const i = [{ j: 'k' }, { l: 'm' }];
const n = { o: { p: 'q' } };

// 원시값의 경우, 변수에 대입만으로도 복사가 됨
let first = a;
first = 'c';
console.log(a);

// 배열 (객체)의 경우, 전개 연산자로 대입하면 복사 됨
let second = [...c]; // 혹은 c.slice()
second.push(2);
console.log(c);

// 객체의 경우도 전개 연산자로 대입하여 복사
let third = { ...e };
third['f'] = 'j';
console.log(e);

// 배열 안 요소가 객체인 경우, JSON으로 파싱하고 스트링화 한다
let fourth = JSON.parse(JSON.stringify(i));
fourth.push({ n: 'o' });
console.log(i);

// 객체 내에 객체가 있는 경우, JSON으로 파싱하고 스트링화 한다
let fifth = JSON.parse(JSON.stringify(n));
fifth['p'] = { r: 's' };
console.log(n);
