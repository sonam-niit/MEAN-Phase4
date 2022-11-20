var app= window.app || {};
app.Models= app.Models || {};
app.Models.Recipe= Backbone.Model.extend({
    defaults: function(){
        return{
            name:"sonam",
            rating:0,
            ingredients:[],
            instructions:[],
            dateAdded:Date.now()
        }
    },
    containsNuts: function(){
        return this.checkForIngredientType('isNut')
    },
    containsEggs: function(){
        return this.checkForIngredientType('isEggs')
    },
    //create function for containsMeat
    checkForIngredientType:function(propertyName){
        var ingredients= this.get('ingredients');

        for(var i=0,len=ingredients.length;i<len;len++){
            if(ingredients[i][propertyName]){
                return true;
            }
        }
        return false;
    }
});