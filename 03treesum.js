function threeSum(array){
    if (array.length > 2){
    let orderedArray = array.sort((a,b) => a-b);
    return orderedArray[0] + orderedArray[1] + orderedArray[2]
    }else{
    return -1
    }
    
}

console.log(threeSum([1, 2]));