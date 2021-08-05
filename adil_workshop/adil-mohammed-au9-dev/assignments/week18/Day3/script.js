function loadXMLDoc() {
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos";
    var unList = document.getElementById("unList");
    xhr.open("GET", url)
    xhr.send()
    xhr.onreadystatechange = function() {
      if (this.readyState == 4){
        var list = document.createElement("ul")
        var response = JSON.parse(xhr.response)
        for (i=0;i<response.length;i++){
          var item = document.createElement('li');
          item.innerText = postModel(response[i])
          list.append(item)
          unList.append(list)
        }
      }
  
    
    }
    function postModel(response){
      return (response.id+". "+response.title)
    }
  }
  
  