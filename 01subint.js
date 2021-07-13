//minden egyes számnál ellenőrizni kell, hogy szerepel e benne az adott szám
//ha igen. meg kell nézni az indexét
//és áthelyezni egy új arraybe

function subint(numb, array){
    let newArray = [];
    for (i =0; i <array.length; i ++){
    if (array[i].toString().includes(numb)==true){
        newArray.push(i)
        }
    }
    return newArray;
}

console.log(subint(1, [1, 11, 34, 52, 61]))