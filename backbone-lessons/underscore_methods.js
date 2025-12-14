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
    // template: _.template($("#collection-template").html()),
    collection: players,
    render: function() {
        // _.each()
        _.each(this.collection.toJSON(), function(item) {
            console.log(item)
        })

        
        /**
         * where: finds all matching items
         * findWhere: finds first matching item
         * find: finds first item that matches a condition
         * filter: finds all items that match a condition
         */

        // _.where()
        var data = _.where(this.collection.toJSON(), {team: "Team A"})
        console.log("Players in Team A:", data)

        // _.findWhere()
        var player = _.findWhere(this.collection.toJSON(), {name: "Jane Smith"})
        console.log("Found Player:", player)

        // _.find()
        var newPlayer = _.find(this.collection.toJSON(), function(item) {
            return item.age > 24
        })
        console.log("First player older than 24:", newPlayer)

        // _.filter()
        var filteredPlayers = _.filter(this.collection.toJSON(), function(item) {
            return item.age < 26
        })
        console.log("Players younger than 26:", filteredPlayers)

        // _.pluck() - extract a list of property values
        var names = _.pluck(this.collection.toJSON(), 'name')
        console.log("Player Names:", names)

    }
})

var playersView = new PlayersView()
playersView.render()