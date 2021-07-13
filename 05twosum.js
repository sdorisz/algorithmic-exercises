let twoSum = function(nums, target) {
    let output = [];
    for (let i = 0; i<nums.length; i ++){
       for (let k =i+1; k < nums.length; k++){
         if (nums[i] + nums[k]== target){
            output.push(i);
            output.push(k);
         }
     }  
    }

    return output
 };


 console.log(twoSum([2,7,11,15],9))