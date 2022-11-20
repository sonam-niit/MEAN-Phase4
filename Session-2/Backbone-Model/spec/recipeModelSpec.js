describe('A recipe',function(){
    it('should exist',function(){
        expect(app.Models.Recipe).toBeDefined();
    })

    it ('should have some default',function(){
        var recipe= new app.Models.Recipe();

        expect(recipe.get("name")).toEqual("sonam");
        expect(recipe.get('rating')).toEqual(0);
        expect(recipe.get('ingredients').length).toEqual(0);
        expect(recipe.get('instructions').length).toEqual(0);
        expect(recipe.get('dateAdded')).toBeDefined();
    })

    it('should check the recipe has nuts',function(){

        var noRestrictions= new app.Models.Recipe(FIXTURES.recipes.noRestrictions);

        var withnuts= new app.Models.Recipe(FIXTURES.recipes.withNuts);

        expect(noRestrictions.containsNuts()).toBe(false);

        expect(withnuts.containsNuts()).toBe(true);
    })
    it('should check the recipe has eggs',function(){

        var noRestrictions= new app.Models.Recipe(FIXTURES.recipes.noRestrictions);

        var witheggs= new app.Models.Recipe(FIXTURES.recipes.withEggs);

        expect(noRestrictions.containsEggs()).toBe(false);

        expect(witheggs.containsEggs()).toBe(true);
        
    })
    it('should check the recipe is vegetarian',function(){
        
    })
})