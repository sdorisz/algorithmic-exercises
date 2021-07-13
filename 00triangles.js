function triangle() {
  let star = "*";
  for (let i = 0; i < 4; i++) {
    console.log(star);
    star += "*";
  }
}

function pyramidUp(lineCount) {
  let space = " ";
  let spaceLength = (lineCount*2)/2;
  let star = "*";

  for (let i = 0; i < lineCount; i++) {
       console.log(space.repeat(spaceLength )+ star );    
       spaceLength -=1;
       star +="**"
  }
  return
}

//pyramid(3);

function pyramidDown (lineCount) {
let star = "*"
let starLength = (lineCount*2) -1
let space =" ";
let spaceLength = 1;
for (let i = 0; i< lineCount; i ++){
    console.log(space.repeat(spaceLength) + star.repeat(starLength))
    starLength -=2;
    spaceLength +=1;
    }
    return
}

function pyramidMiddle(lineCountAll){
    let star = ("*");
    let middleLine = star.repeat(lineCountAll);
    console.log(middleLine)
    return
}


function pyramid(lineCountAll){
    let lineCount = (lineCountAll-1)/2;
    pyramidUp(lineCount)+ pyramidMiddle(lineCountAll) +pyramidDown(lineCount);
    return
}


console.log(pyramid(11))