var PlayerModel = Backbone.Model.extend({
    defaults: {
        name: "Default Name",
        age: 0,
        team: "Default Team"
    }
})

var player1 = new PlayerModel({
    name: "John Doe",
    age: 25,
    team: "Team A"
})

var player2 = new PlayerModel({
    name: "Jane Smith",
    age: 22,
    team: "Team B"
})

var player3 = new PlayerModel({
    name: "Mike Johnson",
    age: 28,
    team: "Team C"
})

var PlayersCollection = Backbone.Collection.extend({
    model: PlayerModel
})

var players = new PlayersCollection();
players.add([player1, player2, player3]);



var PlayersView = Backbone.View.extend({
    el: "#content",
    template: _.template($("#collection-template").html()),
    collection: players,
    render: function() {
        this.$el.html(this.template({
            players: this.collection.toJSON()
        }));
        _.each(this.collection.toJSON(), function(player) {
            console.log(player.name + ", " + player.age + ", " + player.team);
        }, this);
    }
})

var playersView = new PlayersView()
playersView.render()