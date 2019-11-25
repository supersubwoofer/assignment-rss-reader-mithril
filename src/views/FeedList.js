var m = require("mithril")
var Feed = require("../models/Feed")
var FeedBoxView = require("./FeedBox").view

var FeedList = {
  oninit: Feed.loadList,

  view: function() {
    return m(".feed-list", [
      m('label', Feed.isFetched === true? Feed.channelTitle:"Loading..."),
      Feed.list.map(FeedBoxView)
    ])
  }
}

module.exports = FeedList