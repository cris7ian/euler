/*
 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?
 */
var _ = require('lodash');
module.exports = () => {
  const target = 10001;
  var answer = 2;
  var n = 0

  var primes = [];

  function isPrime(number) {
    var it = true;
    for (var i = 0; i < primes.length; i ++) {
      if (primes[i] > Math.sqrt(number)) break;
      if (number % primes[i] == 0) {
        it = false;
      }
    }

    if (!it) {
      return false;
    } else {
      primes.push(number);
      return true;
    }
  }

  while (true) {
    n = isPrime(answer) ? n + 1 : n;
    if (n == target) break;
    answer++;
  }

  return answer;
};
