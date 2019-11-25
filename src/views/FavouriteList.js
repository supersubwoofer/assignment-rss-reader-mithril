var m = require("mithril")

var FavouriteList = {
  view: function() {
    return m("section", [
      m("h1", {class: "title"}, "Fav")
  ])
  }
}

module.exports = FavouriteList