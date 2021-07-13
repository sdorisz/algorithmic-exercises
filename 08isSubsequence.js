var isSubsequence = function(s, t) {
 if(s.length>t.length){
     return false;
 }
 let p = 0;
for(let i =0; i<t.length; i++){
    if(s[p] === t[i]){
        p++;
    }
 }
 return p === s.length;
    
};

