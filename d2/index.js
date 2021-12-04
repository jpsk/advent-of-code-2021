function getData() {
  return require('../common')
    .getData(__dirname)
    .split('\n')
    .map((i) => i.split(' '))
    .map(([i, v]) => [i, Number(v)]);
}

function part1() {
  const data = getData();

  let x = 0;
  let y = 0;

  data.forEach(([i, v]) => {
    if (i === 'forward') {
      x += v;
    }
    if (i === 'down') {
      y += v;
    }

    if (i === 'up') {
      y -= v;
    }
  });

  return x * y;
}

function part2() {
  const data = getData();
  let x = 0;
  let y = 0;
  let aim = 0;

  data.forEach(([i, v]) => {
    if (i === 'forward') {
      x += v;
      y += v * aim;
    }
    if (i === 'down') {
      aim += v;
    }

    if (i === 'up') {
      aim -= v;
    }
  });

  return x * y;
}

module.exports = { part1, part2 };
