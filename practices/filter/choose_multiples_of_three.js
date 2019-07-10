'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  return collection.filter(if3time);
}

const if3time = (num) => {
  return num % 3 == 0;
}
module.exports = choose_multiples_of_three;
