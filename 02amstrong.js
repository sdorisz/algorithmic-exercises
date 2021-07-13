function amstrong(number) {
  let array = number.toString().split("");
  let newArray = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let powerNumber = array.length;
    sum += (Math.pow(array[i], powerNumber));
  }
  if (number == sum) {
    return "it is am amstrong";
  }
  return "it is not am amstrong";
}

console.log(amstrong(371));
