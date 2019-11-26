var m = require("mithril")
var favCookieHelper = require("../utils/FavouriteCookieHelpers")

var FeedBox = {
  view: function(feed) {
    return m(".col-md-4", [
      m(".card mb-4 shadow-sm", [
        m("img", {
          src: feed.imgSrc,
          class: "bd-placeholder-img card-img-top",
          width: "100%",
          height: "225",
          focusable: "false", 
          role: "img", 
          "aria-label": "Placeholder: Thumbnail"
        }),
        m(".card-body", [
          m("p", { class: "card-text" }, feed.title),
          m(".d-flex justify-content-between align-items-center", [
            m(".btn-group", [
              m("span", {
                class: feed.isFavourite === true ? "icon favour oi oi-heart" : "icon oi oi-heart",
                
                onclick: function() { 
                  (feed.isFavourite === true ? 
                  favCookieHelper.removeById(feed.guid):
                  favCookieHelper.add(feed.guid, feed.title))
                  
                  feed.isFavourite = !feed.isFavourite
                }
              })
            ])
          ])
        ])
      ])
    ])
  }
}

module.exports = FeedBox