'use strict';

function grouping_count(collection) {

  //implement here
  var key =[];
  var count = [];
  var result = {};
  /*var temp ={}
  collection.filter(ifConclude)*/
  for(let i = 0; i < collection.length; i++){
    if(key.indexOf(collection[i]) != -1){
        count[key.indexOf(collection[i])] ++;
    }else{
        key.push(collection[i]);
        count.push(1);

    }

  }
  
  for(let j = 0; j < key.length; j++){
     result[key[j]] = count[j];
  }
  console.log(result);
  return result;
  
}

/*const ifConclude = (num,set) => {
  return set.indexOf(num) != -1;
}*/

module.exports = grouping_count;
