// Backbone Model

var Blog = Backbone.Model.extend({
  defaults: {
    title: "",
    author: "",
    url: "",
  },
});

// Backbone Collection

var Blogs = Backbone.Collection.extend({
  model: Blog,
});

// Create Collection Instance
var blogsCollection = new Blogs();

// Backbone Views

// View for a single Blog
var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: "tr",
  initialize: function () {
    this.template = _.template($("#blogs-list-template").html());
    this.render();
  },
  events: {
    "click #edit-blog": "editBlog",
    "click #delete-blog": "deleteBlog",
    "click #update-blog": "updateBlog",
    "click #cancel-blog": "cancelBlog",
  },
  deleteBlog: function () {
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  editBlog: function () {
    this.$("#read").hide();
    this.$("#edit").show();

    var author = this.$("#author").html();
    var title = this.$("#title").html();
    var url = this.$("#url").html();   

    this.$("#author").html("<input type='text' class='form-control' id='author-input-update' value='" + author + "'/>");
    this.$("#title").html("<input type='text' class='form-control' id='title-input-update' value='" + title + "'/>");
    this.$("#url").html("<input type='text' class='form-control' id='url-input-update' value='" + url + "'/>");
  },
  deleteBlog: function () {
    this.model.destroy();
  },
  updateBlog: function () {
    this.model.set("author", this.$("#author-input-update").val());
    this.model.set("title", this.$("#title-input-update").val());
    this.model.set("url", this.$("#url-input-update").val());
  },
  cancelBlog: function () {
    blogsView.render();
  },
});

// View for all Blogs
var BlogsView = Backbone.View.extend({
  model: blogsCollection,
  el: $("#blogs-list"),
  initialize: function () {
    var self = this;
    this.model.on("add", this.render, this);
    this.model.on("change", function () {
      setTimeout(function () {
        self.render();
      }, 30)
    }, this);
    this.model.on("remove", this.render, this);
  },
  render: function () {
    var self = this;
    this.$el.html("");
    _.each(this.model.toArray(), function (blog) {
      self.$el.append(new BlogView({ model: blog }).render().$el);
    });
    return this;
  },
});

var blogsView = new BlogsView();

$(document).ready(function () {
  $("#add-blog").on("click", function () {
    var blog = new Blog({
      author: $("#author-input").val(),
      title: $("#title-input").val(),
      url: $("#url-input").val(),
    });
    $("#author-input").val("");
    $("#title-input").val("");
    $("#url-input").val("");
    blogsCollection.add(blog);
  });
});
