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
                  feed.isFavourite = !feed.isFavourite
                  console.log(`clicked on: ${feed.title}`)
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


/* <div class="col-md-4">
<div class="card mb-4 shadow-sm">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
  <div class="card-body">
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
      </div>
      <small class="text-muted">9 mins</small>
    </div>
  </div>
</div>
</div> */