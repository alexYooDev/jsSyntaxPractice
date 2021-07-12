let mySet = new Set();

console.log(toString.call(mySet));

// set : 중복을 허용하지 않음 => 이미 존재하는 지 체크할 때 유용.

mySet.add('alex');
mySet.add('justin');
mySet.add('alex');

console.log(mySet.has('justin'));

// mySet.forEach((v) => {
//   console.log(v);
// });
