function bowlingScore(rolls){
    var sum = 0;
    var i = 0;
    var strikes = 0;
    while(i<20){
        if(rolls[i-strikes]>9){
            sum = sum + rolls[i-strikes] + rolls[i-strikes+1] + rolls[i - strikes + 2];
            i=i+2;
            strikes++;
        }
        else if(rolls[i - strikes]+rolls[i - strikes+1]>9){
            sum = sum + rolls[i - strikes] + rolls[i - strikes+1] + rolls[i - strikes+2];
            i=i+2;
        }
        else{
            sum = sum + rolls[i - strikes] + rolls[i - strikes+1];
            i=i+2;
        }
    }
    return sum;
}

module.exports = {
    bowlingScore: bowlingScore
};
