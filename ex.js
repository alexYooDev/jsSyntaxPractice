//배열에서 1~10 사이의 수만 추출

(function test() {
  const arr = [1, 2, 3, 9, 4, 5, 10, 6, 20, 30, 40];
  function tenOrUnder(value) {
    return value >= 1 && value <= 10;
  }
  const newArr = arr.filter(tenOrUnder);
  console.log(newArr);
})();
