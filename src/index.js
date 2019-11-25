var m = require("mithril")

var home = require("./views/FeedList")
var favouriteList = require("./views/FavouriteList")

m.route(document.getElementById('main-content'), "/home", {
  "/home": home,
  "/fav": favouriteList,
})