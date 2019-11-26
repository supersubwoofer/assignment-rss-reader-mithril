
var favCookieHelper = require("../utils/FavouriteCookieHelpers")

var EventHandlers = {
  showNewsOnModal: function(ev, feed) { 
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
    ev.stopPropagation()
    feed.isFavourite = !feed.isFavourite
  },
  removeFavourite: function(e, favourite, favouriteList) { 
    favCookieHelper.removeById(favourite.guid)

    var filtered = favouriteList.filter(function(value){
      return value.guid !== favourite.guid
    })
    return filtered
  }
}

module.exports = EventHandlers