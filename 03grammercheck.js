function grammarCheck(sentence) {
  let sentenceArray = sentence.replace(/\s/g, "").split(".");
  let letterArray = [];
  for (let k = 1; k < sentenceArray.length - 1; k++) {
    letterArray.push(sentenceArray[k][0]);
  }

  return letterArray.every((letter) => letter == letter.toUpperCase());
}

console.log(grammerCheck ("ez még mindig egy jó példa. Hiszen a második mondat nagybetűvel kezdődik"));