let matrix = [
  [1, 3, 6, 2],
  [4, 5, 6, 1],
  [3, 3, 1, 5],
  [9, 0, 5, 2],
];

function multiplyMatrixItems(matrix) {
  let modifiedMatrix = matrix;
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (i % 2 == 1 && matrix[i][k] % 2 == 0) {
        matrix[i][k] = matrix[i][k] * 2;
      }
    }
  }
  return modifiedMatrix
}
console.table(multiplyMatrixItems(matrix));
