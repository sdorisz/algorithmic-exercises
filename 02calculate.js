const args = process.argv.splice(2);

console.log("Az input paraméterek: ", args);


  if (args.hasOwnProperty('+')) {
     return 'tul sok'
  } else if (args.hasOwnProperty("-")) {
    return num1-num2
  } else if (args.hasOwnProperty("*")) {
    return num1*num2
  } else if (args.hasOwnProperty("/")) {
    return num1/num2;
  } else {
    return "Please type in the expression:"
  }


console.log(calculate(6,3));