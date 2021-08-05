$.ajax({
    url: "https://api.github.com/users",
    type: "get",
    success: function(res){
      for(let i=0; i<res.length; i++){
        var x = 
                  "<tr>"+
                    "<td>"+res[i].id +"</td>"+
                    "<td>"+res[i].login +"</td>"+
                    "<td>"+res[i].type +"</td>"+
                    "<td>"+res[i].avatar_url +"</td>"+
                "</tr>"
            $("#login").append(x)
      }
    }
   })