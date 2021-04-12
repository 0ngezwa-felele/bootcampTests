describe('greet function' , function(){
    it('Should return Hello, name' , function(){

        assert.equal('Hello, Ongezwa', greet('Ongezwa'));
    });
    it('Should return Hello, name' , function(){
        assert.equal('Hello, Avuzwa', greet('Avuzwa'));
    
});
});