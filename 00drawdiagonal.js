let symbol = "%";
let spaceHome = "";
let spaceEnd = "";
let border = "";
let lineCount = 6;

for (let i = 0; i < lineCount; i++) {
  if (i == 0) {
    for (let j = 0; j < lineCount; j++) {
      border += "%";
    }
    console.log(border);
  } else if (i == lineCount-1) {
    border = "";
    for (let g = 0; g < lineCount; g++) {
      border += "%";
    }
    console.log(border);
  } else {
    for (let r = lineCount-3; r >= i; r--) {
      spaceEnd += " ";
    }
    console.log("%" + spaceHome + symbol + spaceEnd + "%");
    
    for (let k = 0; k < 1; k++) {
      spaceHome += " ";
    }
    spaceEnd = "";
  }
}
