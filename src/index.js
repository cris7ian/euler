var _ = require('lodash');
var fs = require('fs');
var argv = require('yargs').argv;

var problems = fs.readdirSync('./src/problems');

if (!argv.problem) {
  _(problems).forEach((problem) => {
    if (problem != '.' || problem != '..') {
      console.log('The solution of problem ' + problem + ' is:');
      console.log(require('./problems/' + problem)());
    }
  }).value();
} else {
  console.log('The solution of problem ' + problem + ' is:');
  console.log(require('./problems/' + argv.problem)());
}
