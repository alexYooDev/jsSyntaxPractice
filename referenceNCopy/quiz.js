const a = 'b';
const c = ['b', true, 1];
const e = { g: 'h' };
const i = [{ j: 'k' }, { l: 'm' }];
const n = { o: { p: 'q' } };

let first = a;
first = 'c';
console.log(a);

let second = [...c];
second.push(2);

console.log(c);

let third = { ...e };
third['f'] = 'j';
console.log(e);

let fourth = [...i];
fourth.push({ n: 'o' });
console.log(i);

let fifth = { ...n };
fifth['p'] = { r: 's' };
console.log(fifth);
