let map = {
  Tojás: "200",
  Tej: "200",
  Hal: "400",
  Alma: "150",
  Kenyér: "50",
  Csirke: "550",
};

function max() {
  let arr = Object.values(map);
  let max = Math.max(...arr);
  return max;
}

//console.log(max())

function average() {
  let sum = 0;
  let count = 0;
  for (let price of Object.values(map)) {
    sum += parseInt(price);
    count += 1;
  }
  sum = Math.round(sum / count);
  return sum;
}

console.log(average());


function count(){
    let count = 0;
    for (let price of Object.values(map)){
        if ( price < 300){
            count +=1;
        }
    }
    return count

}

console.log(count())

function min(){
    let arr = Object.values(map);
    let min = Math.min(...arr)
    return min
}

console.log(min())


function lessThan(){
    let cheapProducts = []
    for (let price in map){
        if (map[price] <201){
            cheapProducts.push(price)
        }
    }
    return cheapProducts
}

console.log(moreThan())

function moreThan(){
    expensiveProducts =[];
    for (let price in map){
        if (map[price]>150){
            expensiveProducts.push(price +' :' + map[price])
        }
    }
    return expensiveProducts
}
