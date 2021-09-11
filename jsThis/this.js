const b = {
  name: 'alex',
  sayName() {
    console.log(this === b);
  },
};
// 객체 내 this는 b를 가리키기 떄문에, true
b.sayName();

// 객체 밖에서 this는 다시 윈도우를 가리키므로, this === b 는 false
const bf = b.sayName;
bf();
