module.exports = function solveSudoku(matrix) {

  var emptyPositions = [];

  for (var i = 0; i < 9; i++){
    for (var j = 0; j < 9; j++){
      if(matrix[i][j]===0);
      emptyPositions.push([i,j])
    }
  }

  getSolution(matrix, emptyPositions);

  return matrix;
}

function getSolution(matrix, emptyPositions){
  for (var i = 0; i<emptyPositions.length; i++){
    var row = emptyPositions[i][0];
    var column = emptyPositions[i][1];
    if (matrix[row][column]===0){
      for (var number = 1; number <= 9; number++){
        if(checkNumber(matrix, column, row, number)){
          matrix[row][column] = number;

          if(getSolution(matrix, emptyPositions)){
            return true;
          } else {
            matrix[row][column] = 0;
          }
        }
      }
      return false;
    }
  }
  return true;
}

function checkRow(matrix, row, number){
  for (var i = 0; i < 9; i++){
    if (matrix[row][i]===number){
      return false;
    }
  }
  return true;
}

function checkColumn(matrix, column, number){
  for(var i = 0; i<9; i++){
    if (matrix[i][column]===number){
      return false;
    }
  }
  return true;
}

function checkBox(matrix, column, row, number){
  row = Math.floor(row/3)*3;
  column = Math.floor(column/3)*3;

  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (matrix[i+row][j+column]===number){
        return false;
      }
    }
  }
  return true;
}

function checkNumber(matrix, column, row, number){
  return (checkRow(matrix, row, number) && checkColumn(matrix, column, number) && checkBox(matrix, column, row, number)) ? true : false;
}
