var test = require("tape");
var index = require("../index.js");

test("#1. Sum of all of them is 0", function(t){
    t.equal(index.bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0);
    t.end();
});

test("#2. Adds all numbers given there are not spares bonuses", function(t){
    t.equal(index.bowlingScore([8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1, 8,1]), 90);
    t.end();
});

test("#3. Takes in to account spares bonuses", function(t){
    t.equal(index.bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]), 190);
    t.end();
});

test("#4. Takes strikes into account", function(t){
    t.equal(index.bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 300);
    t.end();
});

test("#5. More strikes testing", function(t){
    t.equal(index.bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]), 11);
    t.end();
});

test("#6. More strikes testing", function(t){
    t.equal(index.bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]), 12);
    t.end();
});

/*

Test.expect( 0 == bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) )
Test.expect( 190 == bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]) )
Test.expect( 300 == bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) )
Test.expect( 11 == bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]) )
Test.expect( 12 == bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]) )

*/
