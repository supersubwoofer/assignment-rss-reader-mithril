var m = require("mithril")

var home = require("./modules/feedlist")
var splash = require("./modules/splash")

m.route(document.getElementById('main-content'), "/home", {
  "/home": home,
  "/fav": splash,
})