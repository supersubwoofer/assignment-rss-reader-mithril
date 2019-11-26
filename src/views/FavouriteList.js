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
            class: "icon favour oi oi-heart",
            onclick: function() { 
              favCookieHelper.removeById(fav.guid)

              var filtered = Favourite.list.filter(function(value){
                return value.guid !== fav.guid
              })
              Favourite.list = filtered
            }
          })
        ])
      })
    ])
  }
}

module.exports = FavouriteList