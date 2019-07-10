'use strict';

function choose_even(collection) {
  /*let result = [];
  //implement here
  for(let i = 0; i < collection.length; i++){
    if(collection[i] % 2 == 0)
      result.push(collection[i]);
  }
  return result;*/
  return collection.filter(ifEven);
}

const ifEven = (num) => {
  return num % 2 ==0;
}

module.exports = choose_even;
