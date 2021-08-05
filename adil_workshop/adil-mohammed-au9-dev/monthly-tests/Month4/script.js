[12:31, 01/11/2020] Vinod Au: inp.addEventListener("keyup", function () {

    for (var i = 0; i < listData.length; i++) {
  
  
      if (listData[i].name.includes(inp.value)) {
  
        var li = "li" + i
        li = document.createElement("li")
        li.innerHTML = '<a href="#">' + listData[i].name + '</a>'
  
        sList.appendChild(li)
        
      }
    }
  
  })
  
  sList.addEventListener("click",function (event) {
    
    var val=event.target
    var val1=val.innerHTML
    
    
    sList.innerHTML=""
    inp.value=""
  
    for (var i = 0; i < listData.length; i++) {
      if (val1===listData[i].name){
        var detailOut=document.querySelector(".detailOutput")
        var deta1=document.querySelector("#det1")
        var deta2=document.querySelector("#det2")
        var deta3=document.querySelector("#det3")
        var deta4=document.querySelector("#det4")
  
        detailOut.style.opacity="1"
        deta1.innerHTML='<b> Restaurant name : '+ listData[i].name +'</b>'
        deta2.innerHTML='Type of Food : '+ listData[i].type_of_food
        deta3.innerHTML='Rating : '+ listData[i].rating
        deta4.innerHTML='Address : '+ listData[i].address
      }
  
  
    }
    
  })
  [12:32, 01/11/2020] Vinod Au: var listData = [{ "name": "@ Thai Restaurant", "rating": 4.5, "type_of_food": "Thai", "address": "30 Greyhound Road Hammersmith" }, {
    "name": "Indian.com Restaurant", "rating": 6, "type_of_food": "Curry", "address": "9 Broughton Hall Road"
  }, {
    "name": "chinese Restaurant", "rating": 3, "type_of_food": "African", "address": "885 High Road Leytonstone"
  }]