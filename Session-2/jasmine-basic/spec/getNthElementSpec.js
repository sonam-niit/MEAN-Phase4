describe('GetNthElement',function(){

    it('function should be defined',function(){
        expect(getNthElement).toBeDefined();
    })

    it('should return the Nth Element',function(){
        var result= getNthElement([1,2,3,4,5],0);
        expect(result).toEqual(1);
    })
})