describe("A page with backbone",function(){

    it('should have a acces of underscore',function(){
        expect(_).toBeDefined();
        expect(_.VERSION).toBeDefined();
    })

    it('should have acess to Backbone',function(){
        expect(Backbone).toBeDefined();
        expect(Backbone.Model).toBeDefined();
        expect(Backbone.Collection).toBeDefined();
        expect(Backbone.View).toBeDefined();
    })
})