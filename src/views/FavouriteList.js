var m = require("mithril")
var Favourite = require("../models/Favourite")
var EventHandlers = require("../EventHandlers/EventHandlers")

var FavouriteList = {
  oninit: Favourite.loadList,

  view: function() {
    
    return m(".fav-list", [
      m('h1', "Favourite News"),
      Favourite.list.map(function(fav){
        
        return m(".fav", fav.title, [
          m("span", {
            class: "icon oi oi-heart favour",
            onclick: function(e){
              Favourite.list = EventHandlers.removeFavourite(e, fav, Favourite.list)
            }
          })
        ])
      })
    ])
  }
}

module.exports = FavouriteList