function smaller(nums) {
  var arr = [];
  for(i=0;i<nums.length;i++){
    var count=0;
    for(j=i+1;j<nums.length;j++){
      if(nums[j]<nums[i]){count++;}
    }
    arr.push(count);
  }
  return arr;
}

console.log(smaller([5, 4, 3, 2, 1]));
