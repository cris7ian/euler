/*
 Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 By starting with 1 and 2, the first 10 terms will be:

 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

 By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 find the sum of the even-valued terms.
 */
module.exports = () => {
  function fibIteration(n) {
    var x = 0;
    var y = 1;
    var z = 1;
    for (var i = 0; i < n; i++) {
      x = y;
      y = z;
      z = x + y;
    }
    return x;
  }

  var sum = 0;
  var n = 0;
  while (true) {
    var fib = fibIteration(n);
    if (fib > 4000000) break;
    if (fib % 2 === 0) sum += fib;
    n++;
  }

  return sum;
};
