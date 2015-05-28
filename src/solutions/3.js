/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/
module.exports = () => {

  function isPrime(number) {
    var upperBound = Math.ceil(Math.sqrt(number));

    for (var i = upperBound; i > 1; i--) {
      if ((number % i == 0)) {
        return false;
      }
    }
    return true;
  }

  const n = 600851475143;
  var upperBound = Math.ceil(Math.sqrt(n));
  var answer;
  for (answer = upperBound; answer > 0; answer--) {
    if ((n % answer == 0) && isPrime(answer)) return answer;
  }

  return answer;
};
