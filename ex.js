(function test() {
  const testJSON = [
    { name: 'jason', age: 27 },
    { name: 'charles', age: 20 },
    { name: 'alex', age: 27 },
    { name: 'senku', age: 19 },
    { name: 'foo', age: NaN },
    {},
    { name: 'var', age: 'undefined' },
    { name: 'leet', age: -2000 },
  ];
  function numberFilter(obj) {
    if (
      'age' in obj &&
      typeof obj.age == 'number' &&
      !isNaN(obj.age) &&
      obj.age > 0
    ) {
      return true;
    } else {
      return false;
    }
  }
  const newJSON = testJSON.filter(numberFilter);
  console.log(newJSON);
})();
