var FirstModel = Backbone.Model.extend({
    initialize: function() {
        console.log("This is the Parent Model")
    },
    parentMethod: function() {
        console.log("This is a method from the Parent Model")
    }
})

// var fModel = new FirstModel()

var childModel = FirstModel.extend({
    childMethod: function() {
        console.log("This is a method from the Child Model")
    },
    parentMethod: function() {
        FirstModel.prototype.parentMethod.call(this)
        console.log("This is an overridden method from the Child Model")
    }
})

var cModel = new childModel()

cModel.parentMethod()
cModel.childMethod()