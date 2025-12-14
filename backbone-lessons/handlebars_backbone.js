var Player = Backbone.Model.extend({
  defaults: {
    name: "Default Player",
    team: "Default Team",
    position: "Default Position"
  }
});

var player1 = new Player({
  name: "John Doe",
  team: "Warriors",
  position: "Forward"
})

var player2 = new Player({
  name: "Jane Smith",
  team: "Knights",
  position: "Guard"
})

var player3 = new Player({
  name: "Mike Johnson",
  team: "Rangers",
  position: "Center"
})

var PlayersCollection = Backbone.Collection.extend({
  model: Player
});

var players = new PlayersCollection([player1, player2, player3]);


var FirstView = Backbone.View.extend({
    el: "#content",
    collection: players,
    model: player1,
    template: Handlebars.compile($("#templ-handlebars").html()),
    initialize: function() {
        this.render()
    },
    render: function() {
      console.log("Handlebars");
      this.$el.html("<h1 class='my-3 text-center'>Handlebars with Backbone.js</h1>");
      this.$el.append(this.template({players: this.collection.toJSON()}));
    }
});


var fView = new FirstView();