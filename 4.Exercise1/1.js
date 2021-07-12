const list = document.querySelectorAll('li');

function print(list) {
  let arr = Array.from(list);
  let strArr = arr.filter((x) => {
    return x.innerText.includes('e');
  });
  return strArr;
}

console.log(print(list));
