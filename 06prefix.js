function prefix(strs) {

if (strs.length ==0){
    return "nein"
};
let prefix = strs[0];

    for(let i = 0; i < strs.length; i++){
      while (strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length-1);
            if (prefix.length == 0){
                return "no"
            }
        }
    }
    return prefix;
}



console.log(prefix(["flower","flow","flight"]));




function prefixMaker (str) {
  let prefix = str [0]
  for (let i = 0; i < str.length; i++ ){
    while(str[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length-1);
      if (prefix.length == 0){
        return "0"
      }
    }
  }
  return prefix;
}

console.log(prefixMaker(["flower","flow","flight"]))