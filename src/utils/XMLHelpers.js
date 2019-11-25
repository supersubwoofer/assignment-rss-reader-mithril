var XMLHelpers = {
  parseXML: function (data) {
    var parser = new DOMParser()
    var  xmlDoc = parser.parseFromString(data,"text/xml")
    return xmlDoc
  },
  getNodeValueByName: function (name, xmlNode) {
    return xmlNode.getElementsByTagName(name)[0].childNodes[0].nodeValue
  }
}

module.exports = XMLHelpers