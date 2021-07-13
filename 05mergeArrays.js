function mergeElements(array1, array2){
    let longerArray;
    let shorterArray;
    let mergerdElements = [];
    if (array1.length < array2.length){
        longerArray = array2
        shorterArray = array1;
    } else {
        longerArray = array1;
        shorterArray = array2;
    }
    
    for(let i=0; i<longerArray.length; i++){
       mergerdElements.push(longerArray[i]);
       if(i<shorterArray.length){
       mergerdElements.push(shorterArray[i]);
         }
    }
    return mergerdElements
}


function mergeElements2(array1, array2){
    let mergedElements =[];
    let longerArray ;

    if (array1.length < array2.length){
        longerArray= array2;
    } else {
        longerArray = array1;
    }

    for(let i=0; i<longerArray.length; i++){
        mergedElements.push(array1[i]);
        mergedElements.push(array2[i]);
    }
    let filteredMergedElements = mergedElements.filter(function (el) {
        return el != null;
    });

    
    return filteredMergedElements;
}

console.log( mergeElements2(["apple", "pear", "banana", "orange"], ["dog", "cat","parrot"]));