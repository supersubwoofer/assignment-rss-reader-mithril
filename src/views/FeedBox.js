var m = require("mithril")
var favCookieHelper = require("../utils/FavouriteCookieHelpers")

var FeedBox = {
  view: function(feed) {
    return m(".col-md-4", [
      m(".card mb-4 shadow-sm", {
          "data-toggle": "modal",
          "data-target": "#modalCenter",
          onclick: function(e){EventHandlers.showNewOnModal(e, feed)}}, [
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
                onclick: function(e){EventHandlers.toggleFavourite(e, feed)}
              })
            ])
          ])
        ])
      ])
    ])
  }
}

var EventHandlers = {
  showNewOnModal: function(ev, feed) { 
    console.log(feed.link)
    document.getElementById("exampleModalCenterTitle").innerText = feed.title
    
    document.getElementById("news-modal-news").remove()
    var news = document.createElement("object");
    news.setAttribute("class", "modal-news")
    news.setAttribute("id", "news-modal-news")
    news.setAttribute("type", "text/html")
    news.setAttribute("data", feed.link)
    document.getElementById("news-modal-body").appendChild(news);
  },
  toggleFavourite: function(ev, feed) { 
    (feed.isFavourite === true ? 
    favCookieHelper.removeById(feed.guid):
    favCookieHelper.add(feed.guid, feed.title))
    
    ev.preventDefault()
    feed.isFavourite = !feed.isFavourite
  }
}

module.exports = FeedBox