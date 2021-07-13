let drinks =['Gin', 'Whiskey', 'Wine', 'Beer']
let doubleDrinks = drinks.map(drink => drink + drink)

let doubleDrink = []
drinks.forEach((drink =>
    doubleDrink.push(drink + drink)))
console.log(doubleDrink)

let numbners = [1, 2, 3, 8, 5, 6]
numbners.forEach((number, index)=>{
    const a = number +1
    console.log(a)
})
