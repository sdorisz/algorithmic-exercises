let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];



  function RotateMatrix (matrix){
      for (let i= 0; i < matrix.length; i ++){
          for (let k = 0; k < matrix[i].length; k++){
            let temp = matrix[i][k]
            matrix[i][k] = matrix[k][i]
             matrix[k][i] = temp
          }
      }
      return matrix
  }


  function  rotate (matrix) {
    return matrix.map((row, i) =>
      row.map((val, j) => matrix[matrix.length - 1 - j][i])
    );
  };
  
  console.table(rotate(matrix))
