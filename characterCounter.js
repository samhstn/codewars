function validateWord(s){
  s = s.toLowerCase().split('').sort().join('');
  var i=1;
  var count = 0;
  while(s.substring(0,1)===s.substring(i,i+1)){
    i++;
  }
  for(j=0;j<s.length;j+=i){
    for(k=1;k<i;k++){
      if(s.substring(j,j+1)!==s.substring(j+k,j+k+1)){
        count++;
      }
    }
    if(s.substring(j,j+1)===s.substring(j+i,j+i+1)){
      count++;
    }
  }
  return count === 0 ? true : false;
}

console.log(validateWord("ffsf!wqyxb2xyknqfs?ss!!!wwwqqyyxxbbb222kkknnn???"));
