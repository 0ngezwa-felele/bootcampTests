describe('countRegNumber function' , function(){
    it('should return the number of registration numbers in a string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);
    });
     it('it should also takes a string that looks like this' , function(){
         assert.equal(countRegNumber('CA 42665, AA 12 RT GP', ),2);
});
 });