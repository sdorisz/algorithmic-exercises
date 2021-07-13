let map = {};
console.log(Object.keys(map).length ===0)
map[97]="a";
map[98]="b";
map[99] = "c";
map[65]= "A";
map[66] = 'B';
map[67]="C";

for(let k in map){
    console.log(k)
}

for(let j in map){
    console.log(map[j])
}

for (let c in map){
    console.log(c + ':' + map[c])
}

map[68]= "D";

console.log(Object.entries(map).length)
console.log(map[99])

delete map[97];
console.log(Object.entries(map))

map={};
console.log(Object.entries(map))

let mapAss={
    '978-1-60309-452-8':'A Letter to Jo',
    '978-1-60309-459-7':'Lupus',
    '978-1-60309-444-3':'Red Panda and Moon Bear',
    '978-1-60309-461-0':'The Lab'
}


for (let k in mapAss){
    console.log(mapAss[k] + "(IBS: " + k +')')
}
console.log('----')

for(let k in mapAss){
    if (k === '978-1-60309-444-3'){
       delete mapAss[k]
    }
}

for(let k in mapAss){
    if (mapAss[k] === 'The Lab'){
       delete mapAss[k]
    }
}

mapAss['978-1-60309-450-4'] = 'They Called Us Enemy';
mapAss['978-1-60309-453-5']= 'Why Did We Trust Him?';

for (let k in mapAss){
    console.log(mapAss[k] + "(IBS: " + k +')')
}