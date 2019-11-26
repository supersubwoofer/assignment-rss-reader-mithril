var m = require("mithril")
var Favourite = require("../models/Favourite")
var favCookieHelper = require("../utils/FavouriteCookieHelpers")

var FavouriteList = {
  oninit: Favourite.loadList,

  view: function() {
    
    return m(".fav-list", [
      m('h1', "Favourite News"),
      Favourite.list.map(function(fav){
        
        return m(".fav", fav.title, [
          m("span", {
            class: "icon oi oi-heart favour",
            onclick: function(e){eHandler.removeFavourite(e, fav, Favourite.list)}
          })
        ])
      })
    ])
  }
}

var eHandler = {
  removeFavourite: function(e, favourite, favouriteList) { 
    favCookieHelper.removeById(favourite.guid)

    var filtered = favouriteList.filter(function(value){
      return value.guid !== favourite.guid
    })
    favouriteList = filtered
  }
}

module.exports = FavouriteList