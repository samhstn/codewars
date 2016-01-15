var number = function(busStops){
  var count=0;
  for(i=0;i<busStops.length;i++){
    count+=busStops[i][0];
    count-=busStops[i][1];
  }
  return count;
};

console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
