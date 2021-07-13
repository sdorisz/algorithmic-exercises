var majorityElement = function(nums) {
    let count = {};
    let majorityLimit = nums.length/2;
  
    for(let i = 0; i < nums.length; i ++){
        if(count[nums[i]]==undefined){
          count[nums[i]] = 1;
        }else{
         count[nums[i]] +=1;
                
        }
    }
    for(let key in count){
     
        if ( count[key] > majorityLimit){
            return key
        }
    }
}

console.log(majorityElement([2,2,1,1,1,2,2]))