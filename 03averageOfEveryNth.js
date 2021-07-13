function averageOfEveryNth(number, n) {
  let sum = 0;
  let count = 0;
  if (n < number.length) {
    for (let i = n - 1; i < number.length; i += n) {
      sum += number[i];
      count += 1;
    }
  } else {
    return 0;
  }
  return sum / count;
}

console.log(averageOfEveryNth([2, 4, 10, 34, 3, 16, 3, 21], 2));
