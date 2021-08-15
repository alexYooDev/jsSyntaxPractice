function countMin(arr) {
  let count = 0;
  let searchMin = Math.min(...arr);
  let pos = arr.indexOf(searchMin);

  while (pos !== -1) {
    count++;
    pos = arr.indexOf(searchMin, pos + 1);
  }

  return count;
}

function countMax(arr) {
  let count = 0;
  let searchMax = Math.max(...arr);
  let pos = arr.indexOf(searchMax);

  while (pos !== -1) {
    count++;
    pos = arr.indexOf(searchMax, pos + 1);
  }

  return count;
}

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
        (j === i &&
          arr[j][i] === Math.max(...arr[i]) &&
          countMax(arr[i]) <= 1) ||
        (j === i && arr[j][i] === Math.min(...arr[i]) && countMin(arr[i]) <= 1)
      ) {
        arr[j].splice(j, 1);
      }
    }
    a_len.push(arr[i].length);
  }

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
  console.log(arr);
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
