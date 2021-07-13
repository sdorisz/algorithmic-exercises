function searchSubstring(word, array) {
  for (let i = 0; i < array.length; i++){
    if (array[i].includes(word)){
        return i   
    }
}
return -1
}

console.log(searchSubstring('ching', ['this', 'is', 'what','searching', 'I\'m', 'in']));
