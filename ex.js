//배열에서 1~10 사이의 수만 추출

(function test() {
  const arr = [1, 2, 3, 9, 4, 5, 10, 6, 20, 30, 40];

  const array = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  function timesTwo(value) {
    return value * 2;
  }
  function getElement(element) {
    let obj = {};
    obj[element.key] = element.value;
    return obj;
  }
  const result = array.map(getElement);
  const map = arr.map(timesTwo);
  console.log(map);
  console.log(result);
})();
