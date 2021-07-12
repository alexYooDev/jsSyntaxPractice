// Destructuring object

let obj = {
  name: 'alex',
  from: 'USA',
  age: '27',
};

// let { name, from } = obj;
// console.log(name, from);

let { name: myName, age: myAge } = obj;
console.log(myName, myAge);
