
let star = ""
for (var i = 0; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
       star += '*';
      }
     console.log(star)
     star = ""
}
 