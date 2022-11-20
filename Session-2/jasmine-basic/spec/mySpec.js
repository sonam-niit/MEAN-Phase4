//suite
describe('My first Test Suite',function(){

    //spec
    it ('Test1',function(){
        expect(23<90).toBeTruthy();//expectation
    })

    it ('Test2',function(){
        expect(10+2).toBe(12);
    })
    it ('Test3',function(){
        expect(add).toBeDefined(); //expecting there must be a add function
    })
})