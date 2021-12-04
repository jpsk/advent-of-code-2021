function getData() {
  return require('../common').getData(__dirname).split('\n');
}

function part1() {
  const data = getData();
  let cmn = [];
  let lcmn = [];

  for (let i = 0; i < data[0].length; i++) {
    let z = 0;
    let o = 0;

    for (let j = 0; j < data.length; j++) {
      if (data[j][i] === '0') {
        z += 1;
      } else {
        o += 1;
      }
    }

    cmn.push(z > o ? 0 : 1);
    lcmn.push(z > o ? 1 : 0);
  }

  const gamma = cmn.join('');
  const epsilon = lcmn.join('');

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

function part2() {
  let data = getData();

  let cmn = [];
  const l1 = data[0].length;
  for (let i = 0; i < l1; i++) {
    let z = 0;
    let o = 0;

    for (let j = 0; j < data.length; j++) {
      if (data[j][i] === '0') {
        z += 1;
      } else {
        o += 1;
      }
    }

    cmn.push(z > o ? 0 : 1);
    data = data.filter((d) => d[i] === (z > o ? '0' : '1'));
  }

  const gamma = cmn.join('');

  let lcmn = [];
  data = [...getData()];
  const l2 = data[0].length;

  for (let i = 0; i < l2; i++) {
    let z = 0;
    let o = 0;

    for (let j = 0; j < data.length; j++) {
      if (data[j][i] === '0') {
        z += 1;
      } else {
        o += 1;
      }
    }

    if (data.length > 1) {
      lcmn.push(z > o ? 1 : 0);
      data = data.filter((d) => d[i] === (z > o ? '1' : '0'));
    } else {
      lcmn.push(data[0][i]);
    }
  }

  const epsilon = lcmn.join('');

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

module.exports = { part1, part2 };
