function countingS (string){
    let count = 0;
    let stringArray = string.split("")
    for (let i = 0; i < stringArray.length; i ++){
        if ( stringArray[i]=="s"){
            count ++;
        }
    }
    return count;
}

console.log(countingS("ends with s characters"));