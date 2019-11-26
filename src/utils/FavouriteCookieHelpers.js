var FavouriteCookie = {
  getAllFavourites: function() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)favorite-feeds\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  },
  findIndexById: function(id) {
    var favIndex = -1
    var allFavourites = FavouriteCookie.getAllFavourites()
    
    if(allFavourites!==null && allFavourites!=="") {
      var favObj = JSON.parse(allFavourites)
      favIndex = favObj.findIndex(function(item, i){
        return item.id === id
      });
    }
    return favIndex
  },
  add: function (id, title) {
    var allFavourites = FavouriteCookie.getAllFavourites()
    
    if(allFavourites!==null && allFavourites!=="") {
      var favObj = JSON.parse(allFavourites)

      var favIndex = favObj.findIndex(function(item, i){
        return item.id === id
      });

      if(favIndex===-1) {
        favObj.push({"id": id, "title": title})
        document.cookie = `favorite-feeds = ${JSON.stringify(favObj)}`
      }
    }
    else {
      document.cookie = `favorite-feeds = [{"id": "${id}", "title": "${title}"}]`
    } 
  },
  removeById: function(id) {
    var allFavourites = FavouriteCookie.getAllFavourites()

    if(allFavourites!==null && allFavourites!=="") {
      var favObj = JSON.parse(allFavourites)
      var filteredObj = favObj.filter(function(item){
        return item.id!==id;         
      });
      document.cookie = `favorite-feeds = ${JSON.stringify(filteredObj)}`
    }
  }
}

module.exports = FavouriteCookie