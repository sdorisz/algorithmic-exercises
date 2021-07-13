function findLongestWord(text){
    const splittedText= text.split(' ');
    splittedText.sort((word1, word2)=> {
        return word1.length-word2.length
    });
    return splittedText[splittedText.length-1]
}


function findLongestWord2(text){
    const splittedText = text.split(' ');
    let temp = text[0];
    for (const word of splittedText){
        if( temp.length < word.length){
            temp = word;
        }
    }
    return temp
}

console.log(findLongestWord2("cica ciakutya kutya"))