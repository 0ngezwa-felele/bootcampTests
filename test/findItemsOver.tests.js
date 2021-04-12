describe('findItemsOver function' , function(){
    var productList= [{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}];
    var threshold=[{"name":"apples","qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}]
    it('should return products that have quantity higher than the threshold' , function(){

        assert.deepEqual(findItemsOver(productList,threshold)[{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });

        it('should return products that have quantity lesser than the threshold' , function(){

        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 1},
            {name : 'bananas', qty : 12},
            {name : 'apples', qty : 3},
        ]),[]);
    });
});