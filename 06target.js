

var searchInsert = function(nums, target) {
    let index;
    if(nums.includes(target)){
        return nums.indexOf(target)        
    }else if(nums.includes(target-1)){
     index =  nums.indexOf(target-1)
    index +=1
    return index 
    }else if(nums.includes(target+1)){
    index =  nums.indexOf(target+1)
    return index 
    }else if (nums[0]>target){
    return 0
    }else if(nums[nums.length-1]<target){
    return nums.length
    }
};


var lengthOfLastWord = function(s) {
    s = s.trim()
    let sArray = s.split(" ");
    let lastWord = sArray[sArray.length-1];
    if(lastWord == undefined){
        return 0
    }
     return lastWord.length 
    };


  //console.log(lengthOfLastWord('a   '))


  var plusOne = function(digits) {
   
    for(let i = digits.length-1; i>=0; i-- ){
        if(digits[i]!=9){
        digits[i]++;
         return digits;
        } else {
         digits[i] = 0;
        }
          
    }
    digits.unshift(1)
    return digits
  
    }

    /*else if (digits.length ==1){
    digits.unshift(1)
    digits[digits.length-1]=0;
    return digits
    }else{
    digits[digits.length-2]++
    digits[digits.length-1]=0;
    return digits
    }*/



console.log(plusOne([9,9]))