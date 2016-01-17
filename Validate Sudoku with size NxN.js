function check(arr){
  var count=0;
  for(i=0;i<arr.length;i++){
    if(arr.indexOf(i+1)===-1){
      count++;
    }
    if(arr.indexOf(i+1,arr.indexOf(i+1)+1)!==-1){
      count++;
    }
  }
  return count>0?true:false;
}

function Sudoku(board){
  var x=board.length;
  var count=0;
  for(j=0;j<x;j++){
    if(check(board[j])){
      count++;
    }
  }
  for(k=0;k<x;k++){
    var ar=[];
    for(l=0;l<x;l++){
      ar.push(board[l][k]);
    }
    if(check(ar)){
      count++;
    }
  }
  for(m=0;m<Math.sqrt(x);m++){
    for(n=0;n<Math.sqrt(x);n++){
      var a=[];
      for(o=0;o<Math.sqrt(x);o++){
        for(p=0;p<Math.sqrt(x);p++){
          a.push(board[Math.sqrt(x)*m+o][Math.sqrt(x)*n+p]);
        }
      }
      if(check(a)){
        count++;
      }
    }
  }
  return count>0?true:false;
}
