
var reverse = function(x) {
    const reversedNum =  parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
    let reversedNumPositive = parseFloat(reversedNum*Math.sign(x));

    if(reversedNumPositive > 2147483648){
            return 0
        
    }
    
    return reversedNum
};

console.log(reverse(-2147483412))
