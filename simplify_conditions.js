function test() {
  let result = '';
  if (a) {
    if (!b) {
      result = 'c';
    }
  } else {
    result = 'a';
  }
  result += 'b';
  return result;
}

// if 문의 중첩을 최소화: 가독성을 높인다.

function test() {
  let result = '';
  if (!a) {
    result = 'a';
    result += 'b';
    return result; // return 하여 함수를 종료
  }
  if (!b) {
    result = 'c';
  }
  result += 'b';
  return result;
}

console.log(test());
