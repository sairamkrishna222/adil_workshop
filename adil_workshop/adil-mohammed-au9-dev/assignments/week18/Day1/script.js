var div = document.createElement('div')
var h1 = document.createElement('h1')
div.append(h1)

var ul = document.createElement('ul')

h1.innerText = "Dom Manipulation"
document.getElementsByTagName('body')[0].append(div)

var strs = ["div", "ul", "li"]
for (var i in strs){
  var elem = document.createElement("li");
  elem.innerText = strs[i]
  ul.appendChild(elem)
}
div.append(ul)