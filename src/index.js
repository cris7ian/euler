var _ = require('lodash');
var fs = require('fs');
var argv = require('yargs').argv;
var colors = require('colors');

var solutions = fs.readdirSync('./src/solutions');

if (!argv.problem) {
  _(solutions).forEach((solution) => {
    if (solution != '.' || solution != '..') {
      console.log(('Solution to problem #' + solution.replace('.js', '') + ' is:').yellow);
      console.log(require('./solutions/' + solution)());
    }
  }).value();
} else { // a solution through CLI.
  try {
    var solution = require('./solutions/' + argv.problem);
  } catch (e) {
    console.log('No such solution.'.red);
    process.exit(1); // a bitch ain't one.
  }
  console.log(('Solution to problem #' + argv.problem + ' is:').yellow);
  console.log(solution());
}
