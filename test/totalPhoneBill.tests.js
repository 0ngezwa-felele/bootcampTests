describe('totalPhoneBill function' , function(){
    it('should calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('sms'), "R" + 0.65);
    });
    it('should calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('call'), "R" + 2.75);
    });

});