var m = require("mithril")

var home = require("./modules/home")
var splash = require("./modules/splash")

//m.mount(document.getElementById('main-content'), home)
m.route(document.getElementById('main-content'), "/home", {
  "/home": home,
  "/fav": splash,
})