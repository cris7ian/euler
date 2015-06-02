/*
  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a^2 + b^2 = c^2
  For example, 32 + 42 = 9 + 16 = 25 = 52.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.
 */
var _ = require('lodash');
module.exports = () => {
  var a = 1;
  var b = 1;
  var c = 2;

  var n = 1000; //made up limit.
  var index = 1;

  while (true) {
    a = index;
    b = a + 1;
    c = b + 1;

    while (c <= n) {
      while (c * c < a * a + b * b) c++;
      if ((c * c == a * a + b * b) && (c <= n) && (a + b + c == 1000)) {
        return a * b * c;
      }
      b++;
    }
    index++;
  }
};
