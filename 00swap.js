function swapNumbers(num1, num2){
    let c = num1;
    num1 = num2;
    num2 = c;
    return console.log(`num1: ${num1}, num2: ${num2}`);
}

swapNumbers(8, 9)