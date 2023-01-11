//Question:10-Calculate 10!(factorial of any number).

function factorial(num){
    let result = 1;
    if (num == 0 || num == 1){
      return result;
    }
    else if(num > 1){
      for(var i = num; i >= 1; i--){
        result = result * i;
      }
      return result;
    }
    else{
        console.log("Number has to be positive")
    }  
  }
  let num = -1;
  result = factorial(num);
  console.log("Factorial of " + num + " : " + result);