function percentageAverage(num){
    let sum = 0;
    let average 
    for (let i= 1; i <= num; i ++){
        sum += i
    }
    average = sum /num
    return `the sum is: ${sum} and the average is: ${average} `
}

console.log(percentageAverage(5))