describe('regCheck function' , function(){
    it('should return true if the reg number is from GP,L,EC,MP', function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
        // it('should return true if the reg number is from GP,L,EC,MP', function(){
            // assert.equal(regCheck('DRT 122 L'),true);
    });
    it('should return false if the reg number is not from GP,L,EC,MP' , function(){
      assert.equal(regCheck("CA 123 432"),false);
  });
  
  });