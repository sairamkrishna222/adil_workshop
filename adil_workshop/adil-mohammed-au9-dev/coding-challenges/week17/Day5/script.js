$.ajax({
    url: "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json",
    type: "get", 
    success: function(res) {
      var myCities = JSON.parse(res);
      for(let i=0; i<myCities.length; i++){
        if (myCities[i].state == "Telangana"){
          var item = "<li>" + myCities[i].name+"</li>";
          $("#telangana").append(item);
          
        }
      }
    }
  })