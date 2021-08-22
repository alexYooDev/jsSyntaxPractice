// var & let 차이

//var는 왠만하면 사용하지 않는다. 그러나 var와 let의 차이는 알아야 한다.
// legacy에 존재할 수 있는 var을 알아야 하기 때문에

function b() {
  var a = 1;
}

console.log(a);

// Reference Error

function c() {
  let d = 1;
}

console.log(d);

// 1

if (true) {
  var e = 1;
}

console.log(e);

// 1

if (true) {
  let f = 1;
}

console.log(f);

// Reference Error

for (var i = 0; i < 5; i++) {}

console.log(i);

// 5

for (let i = 0; i < 5; i++) {}

console.log(i);

//Reference Error 블록 밖에서는 접근 불가능
