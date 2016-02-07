function pipeFix(numbers){
    var a=[];
    for(i=numbers[0];i<=numbers[numbers.length-1];i++){
        a.push(i);
    }
    return a;
}

test("pipeProblem", function(assert){
    assert.deepEqual(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
    assert.deepEqual(pipeFix([6,9]),[6,7,8,9]);
    assert.deepEqual(pipeFix([-1,4]),[-1,0,1,2,3,4]);
    assert.deepEqual(pipeFix([1,2,3]),[1,2,3]);
});
