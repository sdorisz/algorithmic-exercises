let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]


function transposeMatrix(matrix){
      for(let i = 0; i < matrix.length; i++){
        for ( let j = i; j < matrix[i].length; j++){
            //[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
}

console.log(transposeMatrix(matrix))
console.log(matrix)