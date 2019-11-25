var m = require("mithril")
var Feed = require("../models/Feed")

var FeedList = {
  oninit: Feed.loadList,
  view: function() {
    return m(".feed-list", [
      m('label', Feed.isFetched===true?Feed.channelTitle:"Loading..."),
      Feed.list.map(function(feed) {
        return m(".feed-list-item", feed.title)
      })
    ])
  }
}

module.exports = FeedList