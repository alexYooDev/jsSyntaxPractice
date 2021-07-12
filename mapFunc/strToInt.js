let myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');

for (let [a, b] of myMap) {
  console.log(a + ' = ' + b);
}
