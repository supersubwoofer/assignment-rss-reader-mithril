var m = require("mithril")
var Feed = require("../models/Feed")
var FeedBoxView = require("./FeedBox").view

var FeedList = {
  oninit: Feed.loadList,
  channel: Feed,
  count: 0,

  view: function() {
    return m(".feed-list", [
      m('label', FeedList.channel.isFetched === true? FeedList.channel.channelTitle:"Loading..."),
      FeedList.channel.list.map(FeedBoxView)
    ])
  }
}

module.exports = FeedList