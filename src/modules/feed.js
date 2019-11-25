var m = require("mithril")

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const END_POINT = 'https://www.concordia.ca/content/concordia/en/news/archive/_jcr_content/content-main/news_list.xml'

var Feed = {
    channelTitle: '',
    channelLink: '',
    channelDescription: '',
    list: [],
    loadList: function() {
        return m.request({
        method: "GET",
        url: `${CORS_PROXY}${END_POINT}`,
        extract: function(xhr) {return {status: xhr.status, body: xhr.responseText}}
      })
      .then(function(response) {
        return parseXML(response.body)
      })
      .then(function(xmlDoc) {
        Feed.channelTitle = getChannelTitle(xmlDoc)
      })
      .catch(function(e) {
          console(`fetch feeds error: ${e.message}`)
      })
      /*  .then(function(response) {
        return response.text()
      })
      .then(function(data) {
        return parseXML(data)
      })
      .then(function(xmlDoc) {
        return getChannelTitle(xmlDoc)
      })
      .then(function(title) {
        Feed.channelTitle = 'title';
      }) */
    },
}

function parseXML(data) {
  var parser = new DOMParser()
  var  xmlDoc = parser.parseFromString(data,"text/xml")
  return xmlDoc
}
function getFeeds(xmlDoc) {
  var items = xmlDoc.getElementsByTagName("item")
  console.log(items[0])
  return xmlDoc
}
function getChannelTitle(xmlDoc) {
  var channelTitle = xmlDoc.getElementsByTagName("title")
  //console.log(channelTitle[0].childNodes[0].nodeValue)
  return channelTitle[0].childNodes[0].nodeValue
}

module.exports = Feed