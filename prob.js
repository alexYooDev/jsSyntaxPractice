function solution(scores) {
  let answer = '';
  let arr = scores;
  let total = 0;
  let avg = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        (i === j && arr[i][j] === Math.max(...arr[i])) ||
        (i === j && arr[i][j] === Math.min(...arr[i]))
      ) {
        arr[i].splice(j, 1);
      }
    }
    total += arr[i][j];
  }

  console.log(avg);
  console.log(arr);
  return answer;
}

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);
