'use strict'

var mergeTwoLists = function(l1, l2) {
    let longerArray 
    let mergedElements=[]
    if (l1.length < l2.length){
        longerArray= l2;
    } else {
        longerArray = l1;
    }

    for(let i=0; i<longerArray.length; i++){
        mergedElements.push(l1[i]);
        mergedElements.push(l2[i]);
    }
    let filteredMergedElements = mergedElements.filter(function (el) {
        return el != null;
    });
    filteredMergedElements.sort((a,b)=> a-b)
    return filteredMergedElements

};

//console.log(mergeTwoLists([1], [2,3]))

var removeDuplicates = function(nums) {
    if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j ++){
      if (nums[j] != nums[i]){
          i++;
          nums[i] = nums[j];
      }
  }
  console.log(nums)
  return i+1
};

console.log(removeDuplicates([1,1,2]))


