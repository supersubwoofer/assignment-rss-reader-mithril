var m = require("mithril")

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
                class: feed.isFavourite===true? "icon favour oi oi-heart":"icon oi oi-heart",
                onclick: function() { 
                  console.log(`before accessing cookie: ${feed.isFavourite}`)
                  feed.isFavourite === true? 
                  FavouriteCookie.removeById(feed.guid):FavouriteCookie.add(feed.guid, feed.title)

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

var FavouriteCookie = {
  getAllFavourites: function() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)favorite-feeds\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  },
  findIndexById: function(id) {
  
  },
  add: function (name, title) {
    //document.cookie = `favorite-feeds = [{"link":"1", "title":"test1"},{"link":"2", "title":"test2"}]`
    var allFavourites = FavouriteCookie.getAllFavourites()
    
    if(allFavourites!==null && allFavourites!=="") {
      favObj = JSON.parse(allFavourites)
      favObj.push({"id": name, "title": title})
      document.cookie = `favorite-feeds = ${JSON.stringify(favObj)}`
    }
    else {
      document.cookie = `favorite-feeds = [{"id": "${name}", "title": "${title}"}]`
    } 
  },
  removeById: function(id) {
    console.log(`remove fav ${id}`)

    var favObj;
    var allFavourites = FavouriteCookie.getAllFavourites()
    if(allFavourites!==null && allFavourites!=="") {
      favObj = JSON.parse(allFavourites)
      var filteredObj = favObj.filter(function(item){
        return item.id!==id;         
      });
      document.cookie = `favorite-feeds = ${JSON.stringify(filteredObj)}`
    }
  }
}

module.exports = FeedBox