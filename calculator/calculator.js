/*
*
*   The Odin Project
* 
*   Calculator  
*
* updateValue()         Sanitise user input and push to array,
*                       call additional functions below,
*                       update page with output
*
* parseEquation()       Sort through array separating operands and operators
*
* evaluateEquation()    Interpret and apply relevant math principles.
*
*/

// Select element used for input, EventListener to invoke updateValue when user input text changes
const getCalculatorUserInput = document.querySelector("#calculator-input-textbox");
getCalculatorUserInput.addEventListener("input", updateValue);

function updateValue(e){
    // inspect user input and apply regex pattern 0-9 () ^ / * + -
    arrayOfMath = e.target.value.match((/[0-9()!^/*+-]/g));
    let equation = evaluateEquation(arrayOfMath);
    document.getElementById("calculator-output-display").textContent = equation.path.join('') + " = " + equation.solution
};

function parseEquation(arrayOfMath) {
    let numbersTest =  new RegExp('^[0-9]+$');

  return arrayOfMath.reduce((accumulator, currentValue, currentIndex, array) => {
    
    // if currentValue is a number, concatenate it with the previous value
    if (numbersTest.test(currentValue)) {
        accumulator[accumulator.length-1] = accumulator[accumulator.length-1].concat(currentValue);
    };
    // if currentvalue is not a number (ie. One of the allowed operator symbols), push it to the accumulator array
    if (!numbersTest.test(currentValue)) {
      accumulator.push(currentValue);
      accumulator.push("")
    };
    return accumulator
  },[""]) // initialValue is array with empty string
};

function evaluateEquation(arrayOfMath){
    let equation = {};
    equation.path = parseEquation(arrayOfMath);
    let a = Number(equation.path[0]);
    let b = Number(equation.path[2]);

//   operator cases
  switch(equation.path[1]) {
      case "*": 
        equation.solution = multiply(a,b);
        break;
      case "/": 
        equation.solution = divide(a,b);
        break;
      case "^": 
        equation.solution = power(a,b);
        break;
      case "+": 
        equation.solution = add(a,b);
        break;
      case "-":
        equation.solution = subtract(a,b);
        break;
      case "!":
        equation.solution = factorial(a)
        break;
    };
    return equation
}



/*
*
*   Calculation functions
*
*/

function add(a,b){
    return a+b
}

function subtract(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    return a/b
}

function power(x,y) {
  let result = 1;
  for (i=0; i<y; i++) {
    result = result * x
  };
  return result	
};

function factorial(x) {
    let currentFactor = x;
    let result = 1;
    while (currentFactor>0){
      result = result * currentFactor
      currentFactor = currentFactor - 1;
    };
    return result
};
