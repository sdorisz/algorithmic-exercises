const numbers = [13, 8, 3, 4,6, 14, 1, 7, 10];

function binarySearch(numbers, searchFor){
    let arr =numbers;
    arr.sort((a,b)=> a-b)
    let index = Math.floor(arr.length/2);
    if(searchFor === arr[index]){
        return arr[index];
    }else if(searchFor < arr[index]){
       const leftArray = arr.slice(0, index);
       // let leftIndex = math.floor(leftArray.length /2);
       if (leftArray.length === 0){
        return 'not found'
        }
       return  binarySearch(leftArray, searchFor);
    }else{
        const rightArray = arr.slice(index+1);
       // let rightIndex = Math.florr(rightArray.length/2);
       if (rightArray.length === 0){
           return 'not found'
       }
       return binarySearch(rightArray, searchFor);
    }
   }

console.log(binarySearch(numbers, 12))