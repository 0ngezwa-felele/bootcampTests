describe('fromWhere function' , function(){
    it('should  return the town the car is from' , function(){
        assert.equal(fromWhere('CA'),"Cape Town");
    });
        it('should  return the town the car if from' , function(){
        assert.equal(fromWhere('CJ'),"Paarl");
    });
        it('should  return the town the car if from' , function(){
        assert.equal(fromWhere('CY'),"Bellville");
    });
        it('should  return Some other place if the town is not specified' , function(){
        assert.equal(fromWhere(''),"Some other place!");
    });
});