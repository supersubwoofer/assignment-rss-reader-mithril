var m = require("mithril")
var Feed = require("../modules/feed")

var FeedList = {
  oninit: Feed.loadList,
  view: function() {
    return m(".feed-list", [
      m('label', Feed.channelTitle),
      Feed.list.map(function(feed) {
        return m(".feed-list-item", feed.guid + " " + feed.title)
      })
    ])
  }
}

module.exports = FeedList