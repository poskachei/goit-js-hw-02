'use strict';

const checkForSpam = function(message) {
  let arrStr = message.toLowerCase().split(' ');
  for (let i = 0; i < arrStr.length; i += 1) {
    let word = arrStr[i];
    if (word === '[spam]' || word === 'sale') {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
