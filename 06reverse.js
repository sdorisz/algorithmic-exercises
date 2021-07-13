function reverse(number) {
  let originalNumber = number;
  let reversedNumbers = [];
  let reversedNum;
  if (number < 0) {
    return false;
  } else {
    while (number > 0) {
      reversedNumbers.push(number % 10);
      number = Math.floor(number / 10);
    }
    reversedNum = reversedNumbers.join("");
    if (originalNumber == reversedNum) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(reverse(-747));
