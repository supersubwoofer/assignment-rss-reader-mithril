var m = require("mithril")
var EventHandlers = require("../EventHandlers/EventHandlers")

var FeedBox = {
  view: function(feed) {
    return m(".col-md-4", [
      m(".card mb-4 shadow-sm", {
          "data-toggle": "modal",
          "data-target": "#modalCenter",
          onclick: function(e){EventHandlers.showNewsOnModal(e, feed)}}, [
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
                class: feed.isFavourite === true ? "icon oi oi-heart favour" : "icon oi oi-heart",
                onclick: function(e){EventHandlers.toggleFavourite(e, feed)}
              })
            ])
          ])
        ])
      ])
    ])
  }
}

module.exports = FeedBox