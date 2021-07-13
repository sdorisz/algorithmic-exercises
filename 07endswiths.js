function countEndsWithS(string){
let stringArray = string.split(' ');
let count = 0;
for(let i =0; i < stringArray.length; i ++){
    if(stringArray[i][stringArray[i].length-1]==='s'){
            count++;
    }
}
return count;
}


console.log(countEndsWithS("ends wisth s characters"))