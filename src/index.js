var _ = require('lodash');
var fs = require('fs');
var argv = require('yargs').argv;

var problems = fs.readdirSync('./src/problems');

if (!argv.problem) {
  _(problems).forEach((problem) => {
    if (problem != '.' || problem != '..') {
      console.log('The solution of problem ' + problem.replace('.js', '') + ' is:');
      console.log(require('./problems/' + problem)());
    }
  }).value();
} else { // a problem through CLI.

  try {
    var solution = require('./problems/' + argv.problem)();
  } catch (e) {
    console.log('No such problem.');
    process.exit(1); // a bitch ain't one.
  }
  console.log('The solution of problem ' + argv.problem + ' is:');
  console.log(solution);
}
