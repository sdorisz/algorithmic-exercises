const girls = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
const boys = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function matchMaking (array1, array2){
    let matchedpairs = [];
    let arrayLength;
    if (array1.length < array2.length){
        arrayLength = array2.length
    }else{
        arrayLength = array1.length;
    }
    for (let i = 0; i <arrayLength; i ++){
            matchedpairs.push([array1[i], array2[i]]);
            
        
    }
    return matchedpairs
}

console.log(matchMaking(girls, boys))