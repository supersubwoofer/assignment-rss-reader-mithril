var m = require("mithril")

var Home= {
  view: function() {
    return m("section", [
      m("h1", {class: "title"}, "Home")
  ])
  }
}

module.exports = Home