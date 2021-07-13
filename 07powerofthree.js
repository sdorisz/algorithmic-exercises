var isPowerOfThree = function(n) {
    if(n % 3 === 1){
        
        return false
    }else if(n === 3){
        
        return true
    }else{
        n=n/3
    }  
    return    isPowerOfThree(n)

         
};



var isPowerOfThree2 = function(n) {
    for(let i = 0; i < 12; i++){
        if(n === Math.pow(3, i)){
        
            console.log(Math.pow(n,i))
            return true
        
        }
    }
    return false
    
    
};
console.log(isPowerOfThree2(7))