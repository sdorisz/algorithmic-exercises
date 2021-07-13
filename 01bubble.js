function bubble (array, isDescending){
    if (isDescending == true){
       return array.sort((a,b)=>b-a )
    }else {
       return array.sort((a,b) => a-b)
    }
}

