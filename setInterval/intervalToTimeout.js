// 반복 간격을 고려
// setInterval(() => {
//   console.log('hello');
// }, 1000);

// 실행 간격을 고려
setTimeout(() => {
  console.log('hello');
  setTimeout(setTimeout, 1000);
}, 1000);
