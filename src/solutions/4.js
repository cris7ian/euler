/*
A palindromic number reads the same both ways. The largest palindrome made
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/
module.exports = () => {

  const upperBound = 999;
  const lowerBound = 100;
  var answer = 0;
  
  for (var x = upperBound; x >= lowerBound; x--) {
    for (var y = upperBound; y >= lowerBound; y--) {
      var product = x * y;
      if (product.toString() == product.toString().split("").reverse().join("")) {
        answer = product > answer ? product : answer;
      }
    }
  }

  return answer;
}
