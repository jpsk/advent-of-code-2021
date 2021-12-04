/**
 * @param dirname {string}
 * @returns {{input: number[], cards: number[][][]}}
 */
function getData(dirname) {
  const [_input, ..._cards] = require('../common')
    .getData(dirname)
    .split('\n\n');

  const input = _input.split(',').map(Number);
  const cards = _cards.map((rawCard) =>
    rawCard.split('\n').map((row) => row.trim().split(/\s+/).map(Number))
  );

  return { input, cards };
}

/**
 * @param card {number[][]}
 * @param numbers {number[]}
 * @returns {[number, number] | false}
 */
function checkBingo(card, numbers) {
  let hasRow;
  let hasColumn = false;

  const predicate = (arr) => arr.every((num) => numbers.includes(num));

  hasRow = card.find(predicate) || false;

  if (!hasRow) {
    const rotatedLeft = card[0].map((col, idx) => card.map((row) => row[idx]));
    hasColumn = rotatedLeft.find(predicate) || false;
  }

  return hasRow || hasColumn;
}

module.exports = { checkBingo, getData };
