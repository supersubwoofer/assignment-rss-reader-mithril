var m = require("mithril")
var Feed = require("../models/Feed")
var FeedBoxView = require("./FeedBox").view
var Favs = require("../models/Favourite")

var FeedList = {
  isAlreadySetFavourite: false,
  oninit: function(vnode) {
    Feed.loadList()
    Favs.loadList()
  },
  setFavourite: function() {
    if(!FeedList.isAlreadySetFavourite && Feed.list!==null && Feed.list.length>0) {
      if(Favs.list!==null){
        Favs.list.forEach(element => {
          var feedIndex = -1;
          feedIndex = Feed.list.findIndex(function(item, i){
            return item.guid === element.guid
          })
          if(feedIndex>-1){
            Feed.list[feedIndex].isFavourite = true;
          }
        })
      }
      FeedList.isAlreadySetFavourite = true;
    }
  },
  view: function() {

    FeedList.setFavourite()
    return m(".feed-list", [
      m('h1', Feed.isFetched === true? Feed.channelTitle:"Loading..."),
      m(".row", Feed.list.map(FeedBoxView))
    ])
  }
}

module.exports = FeedList