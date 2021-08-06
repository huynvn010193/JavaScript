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

function matrixElementsSum(matrix) {
  for (i = 0; i < matrix.length; i++) {
    let t = [];
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        t.push(j);
      }
    }
    if (t.length && i < matrix.length - 1) {
      matrix[i + 1] = matrix[i + 1].filter((it, idx) => !t.includes(idx));
    }
    // matrix[i].filter((it) => it !== 0);
  }
  return matrix.reduce((acc,it) => acc.concat(it),[]).reduce((acc, it) => (acc += it), 0);
}

const a = matrixElementsSum([
  [1, 0, 3],
  [0, 2, 1],
  [1, 2, 0],
]);

console.log(a);
