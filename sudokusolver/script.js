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
                            // console.log('00000--'+puzzle[i][j]);
                            var colIndex = puzzle[i][j].indexOf(l);
                            puzzle[i][j].splice(colIndex, 1);
                            // console.log('-=-=' + puzzle[i][j]);
                            // console.log(typeof puzzle[i][j]);
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
                    for(q=Math.floor(j/3)*3;q<Math.floor(j/3)*3+3;q++){
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

function isFinished(puzzle){
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(typeof puzzle[i][j] === 'object'){
                return false;
            }
        }
    }
    return true;
}

function sudoku(puz){
    puz = setup(puz);
    while(isFinished(puz)===false){
        puz = solveBox(puz);
        puz = solveCol(puz);
        puz = solveRow(puz);
        puz = clearArrays(puz);
    }
    return puz;
}

module.exports = {
    setup: setup,
    solveRow: solveRow,
    solveCol: solveCol,
    solveBox: solveBox,
    clearArrays: clearArrays,
    isFinished: isFinished,
    sudoku: sudoku
};
