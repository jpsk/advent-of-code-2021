const { getData, checkBingo } = require('./util');

function part1() {
  const { cards, input } = getData(__dirname);
  const drawn = [];

  for (let i = 0; i < input.length; i++) {
    drawn.push(input[i]);

    for (let j = 0; j < cards.length; j++) {
      if (checkBingo(cards[j], drawn)) {
        const leftoverSum = cards[j]
          .flat(1)
          .filter((numbers) => !drawn.includes(numbers))
          .reduce((a, b) => a + b, 0);

        return leftoverSum * input[i];
      }
    }
  }
}

function part2() {
  const { cards, input } = getData(__dirname);
  const drawn = [];
  const bingoCards = [];

  for (let i = 0; i < input.length; i++) {
    drawn.push(input[i]);

    for (let j = 0; j < cards.length; j++) {
      if (bingoCards.includes(j)) {
        continue;
      }

      if (checkBingo(cards[j], drawn)) {
        bingoCards.push(j);
      }
    }

    if (bingoCards.length === cards.length) {
      const leftoverSum = cards[bingoCards.slice(-1)[0]]
        .flat(1)
        .filter((numbers) => !drawn.includes(numbers))
        .reduce((a, b) => a + b, 0);

      return leftoverSum * input[i];
    }
  }
}

module.exports = { part1, part2 };
