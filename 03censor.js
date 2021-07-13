function censor(sentence, oldWord, newWord){
    let sentenceArray = sentence.split(' ');
      for(let i = 0; i < sentenceArray.length; i ++){
        if (sentenceArray[i]== oldWord){
            sentenceArray[i]=newWord;
               }
    }
    return sentenceArray.join(' ')
}

console.log(censor("A kedvenc gyümölcsöm a(z) alma", "alma", "banán"));