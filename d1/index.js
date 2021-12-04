const { getData } = require('../common');

function part1() {
  const data = getData(__dirname).split('\n').map(Number);

  let inc = 0;
  let dec = 0;

  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) {
      inc++;
    } else {
      dec++;
    }
  }

  return inc;
}

function part2() {
  const data = getData().split('\n').map(Number);

  // transform
  const arr = [];

  for (let i = 0; i < data.length; i++) {
    const n = data[i];
    const n1 = i + 1 >= data.length ? 0 : data[i + 1];
    const n2 = i + 2 >= data.length ? 0 : data[i + 2];

    arr.push(n + n1 + n2);
  }

  // apply
  let inc = 0;
  let dec = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      inc++;
    } else {
      dec++;
    }
  }

  return inc;
}

module.exports = { part1, part2 };
