//배열에서 1~10 사이의 수만 추출

(function test() {
  const arr = [1, 2, 3, 9, 4, 5, 10, 6, 20, 30, 40];
  const obj = { min: 1, max: 10 };
  function getUnder10(value) {
    return value >= this.min && value <= this.max;
  }
  const newArr = arr.filter(getUnder10, obj);
  console.log(newArr);
})();
