var m = require("mithril")
var Config = require("../config")

var Feed = {
    channelTitle: '',
    channelLink: '',
    channelDescription: '',
    list: [],

    isFetched: false,
    loadList: function() {
        return m.request({
        method: "GET",
        url: `${Config.CORS_PROXY}${Config.END_POINT}`,
        extract: function(xhr) {return {status: xhr.status, body: xhr.responseText}}
      })
      .then(function(response) {
        return parseXML(response.body)
      })
      .then(function(xmlDoc) {
        Feed.channelTitle = getChannelTitle(xmlDoc)
        Feed.channelDescription = getChannelDescription(xmlDoc)
        Feed.channelLink = getChannelLink(xmlDoc)
        Feed.list = getFeeds(xmlDoc)
        Feed.isFetched = true
      })
      .catch(function(e) {
          console.log(`fetch feeds error: ${e.message}`)
      })
    },
}

function parseXML(data) {
  var parser = new DOMParser()
  var  xmlDoc = parser.parseFromString(data,"text/xml")
  return xmlDoc
}
function getFeeds(xmlDoc) {
  var items = xmlDoc.getElementsByTagName("item")
  var list = []
  for(i=0; i< items.length; i++) {
    list.push({
      guid: getNodeValueByName("guid", items[i]),
      title: getNodeValueByName("title", items[i]),
      link: getNodeValueByName("link", items[i]),
      description: getNodeValueByName("description", items[i]),
    })
  }
  return list
}
function getChannelTitle(xmlDoc) {
  return getNodeValueByName("title", xmlDoc)
}
function getChannelLink(xmlDoc) {
  return getNodeValueByName("link", xmlDoc)
}
function getChannelDescription(xmlDoc) {
  return getNodeValueByName("description", xmlDoc)
}
function getNodeValueByName(name, xmlNode) {
  return xmlNode.getElementsByTagName(name)[0].childNodes[0].nodeValue
}

module.exports = Feed