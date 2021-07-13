const words =
  ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];
  
function quoteSwap(words){
let temporary = words[2];
words.splice(2,1, 'cannot ');
words[5] = temporary;
    return words.join(' ')
}

console.log(quoteSwap(words));