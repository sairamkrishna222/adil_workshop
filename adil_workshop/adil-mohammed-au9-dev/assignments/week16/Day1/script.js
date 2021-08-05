function sum(a,b){
    return a+b
  }
  function square(x){
    return x*x
  }
  
  function Operation() {
    this.sum = sum;
    this.square = square
    this.sum.square = sol;
    function sol(a,b) {
      return square(a+b)
    }
    
  }
  
  
  var operation = new Operation();
  console.log(operation.sum(1,2))
  
  console.log(operation.square(2))
  
  
  console.log(operation.sum.square(2,3))