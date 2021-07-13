function square(lineCount){
let percentage = "%";
let frameLines = percentage.repeat(lineCount);
let space = " ";
let spaceLength = lineCount-2;
let middleLines = percentage + space.repeat(spaceLength) + percentage;
console.log(frameLines)
for (let i =0; i < lineCount-2; i ++){
    console.log(middleLines)
}
console.log(frameLines)
return
}


square(6)