var m = require("mithril")
var Favourite = require("../models/Favourite")
var EventHandlers = require("../EventHandlers/EventHandlers")

var FavouriteList = {
  oninit: Favourite.loadList,

  view: function() {
    
    return m(".fav-list", [
      m('h1', "Favourite News"),
      m(".my-3 .p-3 .bg-white .rounded .shadow-sm", [
      Favourite.list.map(function(fav){
        
        return m(".fav", {
            class: "media pt-3",
            "data-toggle": "modal",
            "data-target": "#modalCenter",
            onclick: function(e){ EventHandlers.showNewsOnModal(e, fav.title, fav.guid)}
          }, [
            m("span", {
              class: "icon oi oi-heart favour bullet-fav-icon",
              "data-toggle": "tooltip", title:"Remove Favourite Item",
              onclick: function(e){
                Favourite.list = EventHandlers.removeFavourite(e, fav, Favourite.list)
              }
            }),
            m("p", {class: "media-body pb-3 mb-0 small lh-125 border-bottom border-gray"}, fav.title)
          ])
        
        })
      ])
    ])
  }
}

module.exports = FavouriteList