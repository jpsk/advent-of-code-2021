/**
 * @param dirname {string}
 * @param test {boolean?}
 * @returns {string}
 */
function getData(dirname, test) {
  const filename = test ? './test.txt' : './input.txt';
  const path = require('path').resolve(dirname, filename);

  return require('fs').readFileSync(path, 'utf-8');
}

/**
 *
 * @param day {number}
 * @param part {number}
 */
function run(day, part) {
  const runFile = `d${day}`;
  const runFn = `part${part}`;
  const fn = require(`./${runFile}`)[runFn];

  console.time('Runtime');
  console.log('Answer:', fn());
  console.timeEnd(`Runtime`);
}

module.exports = { getData, run };
