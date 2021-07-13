Alice = {
  Rizs: 1,
  Tojás: 5,
  Csirke: 2,
  Alma: 1,
  Paradicsom: 10,
};

Bob = {
  Tej: 3,
  Rizs: 2,
  Tojás: 2,
  Sajt: 1,
  Csirke: 4,
  Alma: 1,
  Paradicsom: 2,
  Krumpli: 1,
};

Prices = {
  Tej: 1.07,
  Rizs: 1.59,
  Tojás: 3.14,
  Sajt: 12.6,
  Csirke: 9.4,
  Alma: 2.31,
  Paradicsom: 2.58,
  Krumpli: 1.75,
  Hagyma: 1.1,
};

console.log()
function sum(name){
    let sum = 0;
    for (let count in name) {
        for (let price in Prices){
            if (count === price){
             sum += (Prices[price]*name[count])
            }
           
        }
    }
    return sum
}

console.log(sum(Bob))
console.log(sum(Alice))


function compare(product, name1, name2){
  if(name1[product] > name2[product] || name1[product]>=1 && name2[product] == undefined ){
      return 'Alice'
  } else if (name1[product] < name2[product]|| name2[product]>=1 && name1[product]==undefined) {
      return 'Bob'
  } else{
      return "no product"
  }
}


console.log(compare('Krumpli', Alice, Bob))
console.log(compare('Rizs', Alice, Bob))

if (Object.values(Bob).length > Object.values(Alice).length){
    console.log('Bob több különböző terméket vásárolt');
}