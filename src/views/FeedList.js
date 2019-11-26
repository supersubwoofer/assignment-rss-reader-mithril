var m = require("mithril")
var Feed = require("../models/Feed")
var FeedBoxView = require("./FeedBox").view
var Favs = require("../models/Favourite")

var FeedList = {
  oninit: function(vnode) {
    Feed.loadList()
    Favs.loadList()
    //console.log("initialize component")
  },

  view: function() {
    //console.log(`feedlist view: ${Favs.list.length}`)
    return m(".feed-list", [
      m('h1', Feed.isFetched === true? Feed.channelTitle:"Loading..."),
      Feed.list.map(FeedBoxView)
    ])
  }
}

module.exports = FeedList