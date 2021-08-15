const arr = [
  [100, 90, 98, 88, 65],
  [50, 45, 99, 85, 77],
  [47, 88, 95, 80, 67],
  [61, 57, 100, 80, 65],
  [24, 90, 94, 75, 65],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {}
}

function count(arr) {
  let count = 0;
  let searchNum = 0;
  let pos = arr.indexOf(searchNum);

  while (pos !== -1) {
    count++;
    pos = arr.indexOf(searchNum, pos + 1);
  }

  return count;
}
