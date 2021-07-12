// document.querySelector('div').addEventListener('click', function ({ target }) {
//   console.log(target.innerText);
// });
document
  .querySelector('div')
  .addEventListener('click', function ({ type, target }) {
    console.log(type, target.tagName);
  });
