function notComplete(board){
  var count=0;
  for(i=0;i<9;i++){
    for(j=0;j<9;j++){
      if(board[i][j]===0){count++;}
    }
  }
  return count>0?true:false;
}

function solveSoleCandidate(puzzle){
  for(i=0;i<9;i++){
    for(j=0;j<9;j++){
      if(puzzle[i][j]===0 && /1-9^9/){
      }
    }
  }
  return puzzle;
}

function sudoku(puzzle) {
  while(notComplete(puzzle)){
    solve(puzzle);
  }
  return puzzle;
}

console.log("Hello World");
