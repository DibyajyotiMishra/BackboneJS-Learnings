var MyModel = Backbone.Model.extend({
    initialize: function() {
        console.log("Complex Events")
        this.bind("change:name", function() {
            console.log("Model changed..")
        })
    },
    validate: function(attribute) {
        if(attribute.name.toString().length < 2) {
            return "Name is not valid"
        }

        if(!attribute.task) {
            return "Some task is needed."
        }
    }
})

var myModel = new MyModel({
    name: "Babul",
    task: "Learning Backbone JS"
})

var MyView = Backbone.View.extend({
    model: myModel,
    initialize: function () {
        this.render()
    },
    render: function() {
        if(this.model.isValid()) {
            console.log("Valid Model");   
        } else {
            console.error(this.model.validationError);    
        }

        this.model.on("change", function() {
            console.log("Change captured inside View");
        })
    }
})

var myView = new MyView()