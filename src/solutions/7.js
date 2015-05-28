/*
 By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

 What is the 10 001st prime number?
 */
module.exports = () => {
  const target = 10001;
  var answer = 2;
  var n = 1;

  function isPrime(number) {
    var upperBound = Math.ceil(Math.sqrt(number));

    for (var i = upperBound; i > 1; i--) {
      if ((number % i == 0)) {
        return false;
      }
    }
    return true;
  }

  while (true) {
    n = isPrime(answer) ? n + 1 : n;
    if (n == target) break;
    answer++;
  }

  return answer;
};
