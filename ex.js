// 배열에서 3보다 작은 값을 추출하여 새로운 배열에 저장

(function test() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  function getThreeAndUnder(value) {
    return value <= 3;
  }
  const newArr = arr.filter(getThreeAndUnder);
  console.log(newArr);
})();
