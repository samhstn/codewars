function twoCount(n) {
  var i=0;
  while(n%1===0){
    n/=2;
    i++;
  }
  return i-1;
}
