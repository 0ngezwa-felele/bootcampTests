describe('totalPhoneBill function' , function(){
    it('should calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('sms'), "R" + 0.65);
    });
    it('should calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('call'), "R" + 2.75);
    });
    it('should calculate the total bill for the data provided' , function(){
        assert.equal(totalPhoneBill('call,sms,call'), "R" + 6.15);
   });
    it('should calculate the total bill for the data provided' , function(){
    assert.equal(totalPhoneBill('call,sms,call,sms,sms'), "R"+ 7.45);
});   
});