/*
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
 */

var primes = [];

function isPrime(number) {
  var it = true;
  for (var i = 0; i < primes.length; i++) {
    if (primes[i] * primes[i] > number) break; //A primer bigger than sqrt won't work.
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

module.exports = () => {
  const target = 2000000;
  var n = 2;
  var sum = 0
  while (n < target) {
    if (isPrime(n)) {
      sum += n
    }
    n++;
  }

  return sum;
};
