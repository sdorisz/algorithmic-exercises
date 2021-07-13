var findRestaurant = function (list1, list2) {
  let lists =[]
  let listCommon= []
    let listLonger;
  let listShorter;
  if (list1.length > list2.length) {
    listLonger = list1;
    listShorter = list2;
  } else {
    listLonger = list2;
    listShorter = list1;
  }
  for (let i = 0; i < listLonger.length; i++) {
    for (let j = 0; j < listShorter.length; j++) {
       if (listLonger[i] === listShorter[j]) {
           if(lists[i+j] ===undefined ){
               lists[i+j]=listLonger[i]
            }else{
                listCommon.push(listLonger[i])
            
        }
      }
    }
  }

 for( let p = 0; p < lists.length; p++){
    if(lists[p] != undefined){
        if(listCommon.length === 0){
        let element = lists[p].toString()
        return element
        }else{
        listCommon.unshift(lists[p])
        return  listCommon
        }
    }
 }
};

console.log(
  findRestaurant(
    ["Shogun","Tapioca Express","Burger King","KFC"],
["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))