function unique(array){
    let newArray =[];
   for(let i = 0; i < array.length; i ++){
       if ( !newArray.includes(array[i])){
           newArray.push(array[i])
       }
   }
   return newArray;
    
}

console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))