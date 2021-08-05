var inputArea = document.querySelector("#inputArea");
var outputArea = document.querySelector("#outputArea");
var push = document.querySelector('#pushItem');
var pop = document.querySelector('#popItem');

var stack = [];

function myFunction(){
    inputArea.select();
}

push.addEventListener('click', function () {
  let a = inputArea.value;
  if (a===""){
    alert("enter value")
  }
  else {
    stack.push(a);
    let j =""
    for(let i=0;i<stack.length;i++){
      j = j+" "+stack[i];
    }
    inputArea.value = "";
    outputArea.value = j;
    inputArea.select();
  }
  
})

pop.addEventListener('click', function(){
  stack.pop();
  let j =""
  for(let i=0;i<stack.length;i++){
    j = j+" "+stack[i];
  }
  inputArea.value = "";
  outputArea.value = j;
  inputArea.select();
})

