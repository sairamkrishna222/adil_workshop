var firstNumber = document.getElementById('firstNumber');
var secondNumber = document.getElementById('secondNumber');
var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');

function checkInp(x)
{
  
  if (isNaN(x)) 
  {
    alert("Must input numbers");
    return false;
  }
}


add.addEventListener('click',function(){
  var a = Number(firstNumber.value);
  var b = Number(secondNumber.value);
  console.log(typeof(a), typeof(b))
  checkInp(a);
  checkInp(b);
  document.querySelector('#result').value = a + b;
})

subtract.addEventListener('click',function(){
  a = Number(firstNumber.value);
  b = Number(secondNumber.value);
  console.log(typeof(a), typeof(b))
  checkInp(a);
  checkInp(b);
  document.querySelector('#result').value = a - b;
})

multiply.addEventListener('click',function(){
  a = Number(firstNumber.value);
  b = Number(secondNumber.value);
  console.log(typeof(a), typeof(b))
  checkInp(a);
  checkInp(b);
  document.querySelector('#result').value = a * b;
})

divide.addEventListener('click',function(){
  a = Number(firstNumber.value);
  b = Number(secondNumber.value);
  console.log(typeof(a), typeof(b))
  checkInp(a);
  checkInp(b);
  document.querySelector('#result').value = a / b;
})