var reverseVowels = function(s) {
    s=s.split('');
    let vowels= ['a','A', 'e','E','o','O', 'u','U', 'i', 'I'];
    let temp=[];
    for(let i=0; i<s.length; i ++){
        for(let p=0; p< vowels.length; p++){
            if(s[i]===vowels[p]){
            temp.push(s[i]);
            s[i]=undefined;
            }
        }
    }
   
    temp.reverse()
    let a=0;
    for(let i=0; i<s.length; i ++){
        if(s[i]===undefined){
             s[i]=temp[a]
             a++
            
        }
    }
   return s.join('')

}



var firstUniqChar = function(s) {
    let sArray = s.split('');
    let letter;
   for(let i =0; i<sArray.length; i++){
        letter = sArray[i]
       sArray.splice(i,1)
   if(!sArray.includes(letter)){
           return i;
       }
       sArray= s.split('');
       }
       return -1;
       
   };

console.log(firstUniqChar("lloo"))