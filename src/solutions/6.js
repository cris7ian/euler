/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/
var _ = require('lodash');

module.exports = () => {
  const n = 100;

  a = ( (n*n + n) / 2 ) * ( (n*n + n) / 2 ); //Gauss.

  b = 0;
  _.times(n, (val) => b += (val + 1)*(val + 1))

  return a - b;
}
