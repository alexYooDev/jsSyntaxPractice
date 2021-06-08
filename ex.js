(function test() {
  const testJSON = [
    { name: 'jason', age: 27 },
    { name: 'charles', age: 20 },
    { name: 'alex', age: 27 },
    { name: 'senku', age: 19 },
    { name: 'foo', age: NaN },
    { name: 'var', age: 'undefined' },
    { name: 'leet', age: -2000 },
  ];
  function findAlex(element) {
    return element.name == 'alex';
  }
  function findAgeUnder27(element) {
    return element.age < 27;
  }

  const newJSON = testJSON.filter(findAlex);
  const ageJSON = testJSON.filter(findAgeUnder27);
  console.log(newJSON);
  console.log(ageJSON);
})();
