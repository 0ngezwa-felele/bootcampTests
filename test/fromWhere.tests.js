describe('fromWhere function' , function(){
    it('should  return the town the car is from' , function(){
        assert.equal(fromWhere('CA'),"Cape Town");
    });
        it('should  return any town' , function(){
        assert.equal(fromWhere('GP'),"Some other place!");
    });
});