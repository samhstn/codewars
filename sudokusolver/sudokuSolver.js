function notComplete(board){
    var count=0;
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(board[i][j]===0){count++;}
        }
    }
    return count>0?true:false;
}

//This function takes an input of a board and outputs the possible number candidates for each square
//The function leaves the numbers that are already defined and replaces 0s with an array of the possible candidates
//Example output: [[1,2,[3,6,8],4,5,[3,6,8],7,[3,6,8],9],[1,2,...,8,9],...,[1,2,...,8,9]]
function possibleCandidates(board){
    var output = [];
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            var outputRow = [];
            if(board[i][j]>0){
                outputRow.push(board[i][j]);
            }
            else{
                
            }
        }
    }
    return output;
}

function sudoku(puzzle) {
    while(notComplete(puzzle)){
        solve(puzzle);
    }
    return puzzle;
}

/*

boardExample = [[1,2,3,4,5,6,7,8,9],[1,2,...,8,9],...,[1,2,...,8,9]]

*/
