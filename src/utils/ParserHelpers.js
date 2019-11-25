
var ParserHelpers = {
  parserGeneric: function (data, format) {
    var parser = new DOMParser()
    var xmlDoc = parser.parseFromString(data, format)
    return xmlDoc
  },
  XMLHelpers: {
    parse: function (data) {
      return ParserHelpers.parserGeneric(data, "text/xml")
    },
    getNodeValueByName: function (name, xmlNode) {
      return xmlNode.getElementsByTagName(name)[0].childNodes[0].nodeValue
    },
    getWholeTextByName: function (name, xmlNode) {
      return xmlNode.getElementsByTagName(name)[0].childNodes[0].wholeText
    }
  },
  HTMLHelpers: {
    parse: function (data) {
      return ParserHelpers.parserGeneric(data, "text/html")
    },
    getImgSrcAttribute: function(imgText){
      HTMLDoc = ParserHelpers.HTMLHelpers.parse(imgText)
      return HTMLDoc.getElementsByTagName("img").item(0).src
    }
  },
}

module.exports = ParserHelpers