function solve(puzzle){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            //sets all 0s to an array of numbers 1 to 9;
            if(puzzle[i][j] === 0){
                puzzle[i][j]=[1,2,3,4,5,6,7,8,9];
                console.log('---1---');
            }
            //removes from puzzle[i][j] all the matching numbers in that row
            for(k=0;k<9;k++){
                for(l=1;l<10;l++){
                    if(puzzle[i][k]===l && puzzle[i][j].indexOf(l)>-1){
                        console.log('---2---');
                        var rowIndex = puzzle[i][j].indexOf(l);
                        puzzle[i][j].splice(rowIndex, 1);
                    }
                }
            }
            //removes from puzzle[i][j] all the matching numbers in that column
            for(k=0;k<9;k++){
                for(l=1;l<10;l++){
                    if(puzzle[k][j]===l && puzzle[i][j].indexOf(l)>-1){
                        console.log('---3---');
                        var colIndex = puzzle[i][j].indexOf(l);
                        puzzle[i][j].splice(colIndex, 1);
                    }
                }
            }
            //removes from puzzle[i][j] all matching numbers in that square
            //if i<3 consider 0,1,2, if i<6 consider 3,4,5, if i<9 consider 6,7,8
            for(p=Math.floor(i/3)*3;p<Math.floor(i/3)*3+3;p++){
                for(q=Math.floor(j/3);q<Math.floor(j/3)+3;q++){
                    for(m=1;m<10;m++){
                        if(puzzle[p][q]===m && puzzle[i][j].indexOf(m)>-1){
                            console.log('---4---');
                            var boxIndex = puzzle[i][j].indexOf(m);
                            puzzle[i][j].splice(boxIndex, 1);
                        }
                    }
                }
            }
        }
    }
    return puzzle;
}

//returns true if complete and false if not
// function isComplete(puzzle){
//     var count = 0;
//     for(i=0;i<9;i++){
//         for(j=0;j<9;j++){
//             if(typeof puzzle[i][j] === 'object' || puzzle[i][j] === 0){
//                 count++;
//             }
//         }
//     }
//     return count === 0 ? true : false;
// }

function sudoku(puzzle){
    for(u=0;u<100;u++){
        puzzle = solve(puzzle);
    }
    return puzzle;
}

var puzz = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

console.log(solve(puzz));

/*function notComplete(board){
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
