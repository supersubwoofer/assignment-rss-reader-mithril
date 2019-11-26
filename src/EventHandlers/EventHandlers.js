
var favCookieHelper = require("../utils/FavouriteCookieHelpers")

var EventHandlers = {
  showNewsOnModal: function(ev, feedTitle, feedLink) { 
    document.getElementById("exampleModalCenterTitle").innerText = feedTitle
    
    document.getElementById("news-modal-news").remove()
    var news = document.createElement("object");
    news.setAttribute("class", "modal-news")
    news.setAttribute("id", "news-modal-news")
    news.setAttribute("type", "text/html")
    news.setAttribute("data", feedLink)
    document.getElementById("news-modal-body").appendChild(news);
  },
  toggleFavourite: function(ev, feed) { 
    (feed.isFavourite === true ? 
    favCookieHelper.removeById(feed.guid):
    favCookieHelper.add(feed.guid, feed.title))
    feed.isFavourite = !feed.isFavourite
    ev.stopPropagation()
  },
  removeFavourite: function(ev, favourite, favouriteList) { 
    ev.stopPropagation()

    favCookieHelper.removeById(favourite.guid)

    var filtered = favouriteList.filter(function(value){
      return value.guid !== favourite.guid
    })
    return filtered
  }
}

module.exports = EventHandlers