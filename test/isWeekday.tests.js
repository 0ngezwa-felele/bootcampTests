describe('isWeekday function' , function(){
    it("should find out if the parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Saturday'), false);
    });
    it("should return false if the parameter passed in in not a day of the week" , function(){
        assert.equal(isWeekday('Saturday'), false);
    });
});