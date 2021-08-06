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
    console.log("r", { r, j });
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
