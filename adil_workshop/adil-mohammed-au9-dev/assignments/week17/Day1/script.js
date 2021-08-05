var form = document.querySelector("#loginForm");
var formData = {}

form.addEventListener("submit",function(){
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value
  let a = username.substring(0,1);
  if (Number.isInteger(parseInt(a))){
    alert("username must start with alphabet");
    form.reset();
  }
  else if (password.length<8){
    alert("password must contain atleast 8 characters");
    form.reset();
  }
  else{
    formData.username = username;
    formData.password = password;
    console.log(formData);
  }
})

