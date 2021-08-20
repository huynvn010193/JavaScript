function almostIncreasingSequence(sequence) {
  const result = sequence.map((item, index) => {
    const arrayNew = sequence.filter((el, i) => i !== index);
    const isresing = arrayNew.slice(1).every((e, i) => {
      console.log({ i, a: arrayNew[i] });
      return e >= arrayNew[i];
    });
    console.log({ arrayNew, isresing });
    return isresing;
  });
  return result.filter((item) => item !== true).length > 0 ? false : true;
}

/**==========================matrixElementsSum============================== */
function matrixElementsSum(matrix) {
  for (i = 0; i < matrix.length; i++) {
    let t = [];
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        t.push(j);
      }
    }
    if (t.length > 0) {
      for (k = i; k < matrix.length; k++) {
        matrix[k] = matrix[k].filter((it, idx) => !t.includes(idx));
      }
    }
  }

  return matrix
    .reduce((acc, it) => acc.concat(it), [])
    .reduce((acc, it) => (acc += it), 0);
}

function matrixElementsSum_2(matrix) {
  for (var r = 0, j = 0; j < matrix[0].length; j++) {
    for (var i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) break;
      else r += matrix[i][j];
    }
  }
  return r;
}

const a = matrixElementsSum([
  [1, 1, 1, 4],
  [2, 2, 0, 1],
  [3, 3, 3],
]);

/**==========================matrixElementsSum============================== */
/**==========================plusMinus - HK============================== */
function plusMinus(arr) {
  const lengthArry = arr.length;
  const totalNegativeNum = arr.filter((it) => it < 0).length / lengthArry;
  const totalEqualNum = arr.filter((it) => it === 0).length / lengthArry;
  const totalPositiveNum = arr.filter((it) => it > 0).length / lengthArry;
  return [
    +totalPositiveNum.toPrecision(6) * 1,
    (Math.round(totalPositiveNum * 1e2) / 1e2).toFixed(6),
    totalEqualNum.toPrecision(6),
    totalNegativeNum.toPrecision(6),
  ];
}

const resultPlusMinus = plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
// console.log("🚀 ~ file: bt.js ~ line 62 ~ resultPlusMinus", resultPlusMinus);

/**==========================Staircase-HK============================== */
// n = 4
/**
  #
  ##
  ###
  ####
*/
function staircase(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
