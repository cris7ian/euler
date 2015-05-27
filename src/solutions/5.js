/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
module.exports = () => {
  function isMCD(n) {
    for (var i = 1; i < 20; i++) if (n % i != 0) return false;

    return true;
  }

  var answer = 20; //Can't be smaller than 20.
  while (true) {
      if (isMCD(answer)) break;
      answer++;
  }

  return answer;
}
