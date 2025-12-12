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
  model: Player,

})

// var players = new PlayersCollection([player1, player2, player3]);
var players = new PlayersCollection();

//collection methods:
// add
var player7 = new Player({
  name: "Bob Marley",
  team: "Eagles",
  position: "Forward"
})

players.add([player1, player2, player3]);
players.add(player7, {at: 2});

// unshift
var player4 = new Player({
  name: "(Added at first) Alice Brown",
  team: "Titans",
  position: "Forward"
})
players.unshift(player4);

// push
var player5 = new Player({
  name: "(Added at last; same as 'add') Bob White",
  team: "Hawks",
  position: "Guard"
})

var player6 = new Player({
  name: "Extra Player",
  team: "Extra Team",
  position: "Extra Position"
})

players.push(player5);

// remove
players.remove(player6);

// reset
players.reset([player1, player3, player5, player7]);

// pop
players.pop();

// shift
players.shift();

var FirstView = Backbone.View.extend({
    collection: players,
    initialize: function() {
        this.render()
    },
    render: function() {
      _.each(this.collection.toJSON(), function(player) {
          console.log(player.name + " plays for the " + player.team + " as a " + player.position);
      });
      
    }
});


var fView = new FirstView();