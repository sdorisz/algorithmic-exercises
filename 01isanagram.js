function isAnagram (firstWord, secondWord){
let sortedFirstWord = firstWord.split('').sort().join('');
let sortedSecondWord= secondWord.split('').sort().join('');
if (sortedFirstWord == sortedSecondWord){
    return true
}else{
    return false
}
}

console.log(isAnagram('gox', 'dog'))