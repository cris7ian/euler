var _ = require('lodash');
var fs = require('fs');
var argv = require('yargs').argv;
var colors = require('colors');

var solutions = fs.readdirSync('./src/solutions');

if (!argv.problem) {
  _(solutions).forEach((solution) => {
    if (solution != '.' || solution != '..') {
      logSolution(require('./solutions/' + solution), solution.replace('.js', ''))
    }
  }).value();
} else { // a solution through CLI.
  if (argv.problem > solutions.length){
    console.log('No such solution.'.red);
    process.exit(1); // a bitch ain't one.
  }
  var solution = require('./solutions/' + argv.problem);
  logSolution(solution, argv.problem)
}

function solve(solution) {
  var start = new Date().getTime();
  var answer = solution();
  var end = new Date().getTime();
  var time = end - start;
  return {answer: answer, time: time};
}

function logSolution(solution, problem) {
  console.log(('Solution to problem #' + problem + ' is:').yellow);
  var data = solve(solution);
  data.answer  = typeof data.answer === 'number' ? numberWithCommas(data.answer) : data.answer;
  console.log(data.answer + (' (took: ' + data.time+' ms)').green);
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
