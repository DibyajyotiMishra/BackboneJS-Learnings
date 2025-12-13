// View 1

var FirstView = Backbone.View.extend({
  el: "#content",
  render: function () {
    this.$el.html("<h1>First View</h1><p>Welcome to the First View!</p>");
    return this;
  },
});

// View 2
var SecondView = Backbone.View.extend({
  el: "#content",
  render: function () {
    this.$el.html("<h1>Second View</h1><p>Welcome to the Second View!</p>");
    return this;
  },
});

// View 3
var ThirdView = Backbone.View.extend({
  el: "#content",
  render: function () {
    this.$el.html("<h1>Third View</h1><p>Welcome to the Third View!</p>");
    return this;
  },
});

// Router
var AppRouter = Backbone.Router.extend({
  routes: {
    "": "View1",
    "view2(/:id)": "View2",
    "view3": "View3",
  },
  View1: function () {
    var firstView = new FirstView();
    firstView.render();
  },
  View2: function (id) {
    var secondView = new SecondView();
    secondView.render(id);
  },
  View3: function () {
    var thirdView = new ThirdView();
    thirdView.render();
  },
});

var appRouter = new AppRouter();
Backbone.history.start();
