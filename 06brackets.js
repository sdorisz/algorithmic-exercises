function findBrackets2(s){
    let index
    let array = s.split('')
    let length = s.length/2

    for(let i = 0; i < length; i ++){
       
         if(s.includes("[]")){
            index =s.indexOf("[]");
            array.splice(index,2)
            s=array.join('')
            
         }else if(s.includes("()")){
            index =s.indexOf("()");
            array.splice(index,2)
            s=array.join('')
           
         }else if(s.includes("{}")){
          
            index =s.indexOf("{}");
            array.splice(index,2)
            s=array.join('')
         }
    }
    if(s.includes("{}")){
        console.log('birdy')
    }
    if(array.length == 0){
        return true
    }else{
        return false;
    }
}

console.log(findBrackets2("([]){}"))


//nem jó kód, de attólmég megtartom emlékbe:
function findBrackets(s){
    let array = s.split('')
    let copyArray = [];
    let a1 = '{';
    let a2 = '}';
    let b1 = '[';
    let b2 = ']';
    let c1 = '(';
    let c2 = ')';
    let arrayLength = array.length-1;
    let halfOfArrayLength = arrayLength/2;
    if (array.length%2 != 0){
        return false;
    }
   
    if(array[0]== a1 && array[arrayLength]==a2 ||array[0]== b1 && array[arrayLength]==b2 || array[0]== c1 && array[arrayLength]==c2 ){
        for (let i = 0; i < halfOfArrayLength ; i++){
            if (array[i]== a1 && array[arrayLength-i]==a2 ||array[i]== b1 && array[arrayLength-i]==b2 || array[i]== c1 && array[arrayLength-i]==c2 ){
                console.log(array[i], array[arrayLength-i])
                
                copyArray.push(array[i]);
                copyArray.push(array[arrayLength-i]);
                console.log(copyArray)
                                       
           }
        }
    }else{
        for (let i = 0; i < arrayLength ; i+=2){
            if(array[i]==a1 && array[i+1] ==a2||array[i]==b1 && array[i+1] ==b2||array[i]==c1 && array[i+1] ==c2){
                copyArray.push(array[i]);
                copyArray.push(array[i+1]);
            }
        }
    }
    if( array.length == copyArray.length){
        return true;
    } else{
        return false;
    }
}
