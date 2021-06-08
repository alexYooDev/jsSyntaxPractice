//map을 이용해 string을 숫자로 바꾸기

(function test() {
  const str = ['1', '2', '3'];
  const int = str.map((str) => parseInt(str));
  console.log(int);
})();
