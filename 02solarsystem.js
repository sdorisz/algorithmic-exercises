const planetList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune']

function putSaturn(array){
    array.splice(5,0, 'Saturn');
    return array
}

console.log(putSaturn(planetList))

