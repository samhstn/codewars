function check(arr){
  var count=0;
  for(i=0;i<9;i++){
    if(arr.indexOf(i+1)===-1){
      count++;
    }
    if(arr.indexOf(i+1,arr.indexOf(i+1)+1)!==-1){
      count++;
    }
  }
  return count>0?true:false;
}

function doneOrNotRows(board){
  var count=0;
  for(j=0;j<9;j++){
    if(check(board[j])){
      count++;
    }
  }
  return count>0?false:true;
}

function doneOrNotColumns(board){
  var count=0;
  for(k=0;k<9;k++){
    var ar=[];
    for(l=0;l<9;l++){
      ar.push(board[l][k]);
    }
    if(check(ar)){
      count++;
    }
  }
  return count>0?false:true;
}

function doneOrNotRegions(board){
  var count=0;
  for(m=0;m<3;m++){
    for(n=0;n<3;n++){
      var a=[];
      for(o=0;o<3;o++){
        for(p=0;p<3;p++){
          a.push(board[3*m+o][3*n+p]);
        }
      }
      if(check(a)){
        count++;
      }
    }
  }
  return count;
}

function doneOrNot(board){
  var count=0;
  for(j=0;j<9;j++){
    if(check(board[j])){
      count++;
    }
  }
  for(k=0;k<9;k++){
    var ar=[];
    for(l=0;l<9;l++){
      ar.push(board[l][k]);
    }
    if(check(ar)){
      count++;
    }
  }
  for(m=0;m<3;m++){
    for(n=0;n<3;n++){
      var a=[];
      for(o=0;o<3;o++){
        for(p=0;p<3;p++){
          a.push(board[3*m+o][3*n+p]);
        }
      }
      if(check(a)){
        count++;
      }
    }
  }
  return count>0?"Try again!":"Finished!"
}

console.log(doneOrNot([[4, 3, 4, 6, 7, 8, 9, 1, 2],
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]]));
