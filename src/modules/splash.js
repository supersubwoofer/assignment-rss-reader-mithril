var m = require("mithril")

var Splash = {
  view: function() {
    return m("section", [
      m("h1", {class: "title"}, "Fav")
  ])
  }
}

module.exports = Splash