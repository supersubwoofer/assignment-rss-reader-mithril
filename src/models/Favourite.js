var favCookie = require("../utils/FavouriteCookieHelpers")

var Favourite = {
    list: [],

    isFetched: false,
    loadList: function() {
      Favourite.list = []
      var favCookies = favCookie.getAllFavourites()
      if(favCookies!==null && favCookies!==""){
        jsonObj = JSON.parse(favCookies)
        for(i=0; i< jsonObj.length; i++) {
          Favourite.list.push({
            guid: jsonObj[i].id,
            title: jsonObj[i].title
          })
        }
      }
      isFetched = true
      //console.log(`From Fav: ${Favourite.list.length}`)
    }
}

module.exports = Favourite