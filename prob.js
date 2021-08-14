function solution(scores) {
  let answer = '';
  let arr = scores;
  let total = [];
  let avg = [];
  let a_len = [];

  const transpose = (matrix) =>
    matrix.reduce(
      (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
      []
    );

  arr = transpose(arr);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        (i === j && arr[i][j] === Math.max(...arr[i])) ||
        (i === j && arr[i][j] === Math.min(...arr[i]))
      ) {
        arr[i].splice(i, 1);
      }
    }
    a_len.push(arr[i].length);
  }
  console.log(arr);
  console.log(a_len);

  // const sumArr = (arr) => {
  //   const newArr = [];
  //   arr.forEach((sub) => {
  //     sub.forEach((num, idx) => {
  //       if (newArr[idx]) {
  //         newArr[idx] += num;
  //       } else {
  //         newArr[idx] = num;
  //       }
  //     });
  //   });
  //   return newArr;
  // };

  total = arr.map(function (arr) {
    return arr.reduce(function (sum, item) {
      return sum + item;
    });
  });

  for (let k = 0; k < a_len.length; k++) {
    avg.push(total.shift() / a_len[k]);
  }

  for (let l = 0; l < avg.length; l++) {
    if (avg[l] >= 90) {
      answer += 'A';
    } else if (avg[l] >= 80) {
      answer += 'B';
    } else if (avg[l] >= 70) {
      answer += 'C';
    } else if (avg[l] >= 50) {
      answer += 'D';
    } else {
      answer += 'F';
    }
  }
  console.log(avg);

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
