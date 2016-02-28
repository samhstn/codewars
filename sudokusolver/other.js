function setup(puzzle){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(puzzle[i][j] === 0){
                puzzle[i][j]=[1,2,3,4,5,6,7,8,9];
            }
        }
    }
    return puzzle;
}

// function solve(puzzle){
//     for(i=0;i<9;i++){
//         for(j=0;j<9;j++){
//             if(typeof puzzle[i][j] === 'object'){
//                 //removes from puzzle[i][j] all the matching numbers in that row
//                 for(k=0;k<9;k++){
//                     for(l=1;l<10;l++){
//                         if(puzzle[i][k]===l && puzzle[i][j].indexOf(l)>-1){
//                             var rowIndex = puzzle[i][j].indexOf(l);
//                             puzzle[i][j].splice(rowIndex, 1);
//                         }
//                     }
//                 }
//                 //removes from puzzle[i][j] all the matching numbers in that column
//                 for(k=0;k<9;k++){
//                     for(l=1;l<10;l++){
//                         if(puzzle[k][j]===l && puzzle[i][j].indexOf(l)>-1){
//                             var colIndex = puzzle[i][j].indexOf(l);
//                             puzzle[i][j].splice(colIndex, 1);
//                         }
//                     }
//                 }
//                 //removes from puzzle[i][j] all matching numbers in that square
//                 //if i<3 consider 0,1,2, if i<6 consider 3,4,5, if i<9 consider 6,7,8
//                 for(p=Math.floor(i/3)*3;p<Math.floor(i/3)*3+3;p++){
//                     for(q=Math.floor(j/3);q<Math.floor(j/3)+3;q++){
//                         for(m=1;m<10;m++){
//                             if(puzzle[p][q]===m && puzzle[i][j].indexOf(m)>-1){
//                                 var boxIndex = puzzle[i][j].indexOf(m);
//                                 puzzle[i][j].splice(boxIndex, 1);
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return puzzle;
// }

function solveRow(puzzle){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(typeof puzzle[i][j] === 'object'){
                //removes from puzzle[i][j] all the matching numbers in that row
                for(k=0;k<9;k++){
                    for(l=1;l<10;l++){
                        if(puzzle[i][k]===l && puzzle[i][j].indexOf(l)>-1){
                            var rowIndex = puzzle[i][j].indexOf(l);
                            puzzle[i][j].splice(rowIndex, 1);
                        }
                    }
                }
            }
        }
    }
    return puzzle;
}

function solveCol(puzzle){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(typeof puzzle[i][j] === 'object'){
                //removes from puzzle[i][j] all the matching numbers in that column
                for(k=0;k<9;k++){
                    for(l=1;l<10;l++){
                        if(puzzle[k][j]===l && puzzle[i][j].indexOf(l)>-1){
                            var colIndex = puzzle[i][j].indexOf(l);
                            puzzle[i][j].splice(colIndex, 1);
                        }
                    }
                }
            }
        }
    }
    return puzzle;
}

function solveBox(puzzle){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(typeof puzzle[i][j] === 'object'){
                //removes from puzzle[i][j] all matching numbers in that square
                //if i<3 consider 0,1,2, if i<6 consider 3,4,5, if i<9 consider 6,7,8
                for(p=Math.floor(i/3)*3;p<Math.floor(i/3)*3+3;p++){
                    for(q=Math.floor(j/3);q<Math.floor(j/3)+3;q++){
                        for(m=1;m<10;m++){
                            if(puzzle[p][q]===m && puzzle[i][j].indexOf(m)>-1){
                                var boxIndex = puzzle[i][j].indexOf(m);
                                puzzle[i][j].splice(boxIndex, 1);
                            }
                        }
                    }
                }
            }
        }
    }
    return puzzle;
}

function solve(puzzle){
    solveBox(solveCol(solveRow(puzzle)));
    return puzzle;
}

//if there is an array with only one number in it, make that position that number e.g. [5] becomes 5 in that position
function clearArrays(puzzle){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(puzzle[i][j].length===1){
                puzzle[i][j]=puzzle[i][j][0];
            }
        }
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

function sudoku(puzzle){
    clearArrays(solve(setup(puzzle)));
    return puzzle;
}

console.log(sudoku(sudoku(puzz)));
