'use strict';

const findLongestWord = function(string) {
  let strSplit = string.split(' ');
  let longestWord = strSplit[0];
  for (let i = 0; i < strSplit.length; i += 1) {
    if (strSplit[i].length > longestWord.length) {
      longestWord = strSplit[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
