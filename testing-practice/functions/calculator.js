const calculator = {
    add: function(a,b){
        return a+b
    },
    subtract: function(a,b){
        return a-b
    },
    multiply: function(arr){
        let result = 1;
        while(arr.length > 0){
            result *= arr.shift()
        };
        return result
    },
    divide: function(arr){
        let result = arr.shift();
        while(arr.length > 0){
            result /= arr.shift()
        };
        return result
    },
    sum: function(arr){
        let result = 0;
        while(arr.length > 0){
            result += arr.shift()
        };
        return result
    },
    power: function(base,power){
        let result = 1;
        for (i=0; i<power; i++) {
            result = result * base
        };
      return result
    },
    factorial: function(num){
        let currentFactor = num;
        let result = 1;
        while (currentFactor>0){
          result = result * currentFactor
          currentFactor = currentFactor - 1;
        };
        return result
    }
};

/* 
// Module pattern IIFE
const calculator = (() => {

    const add      = (a,b) => a + b;
    const subtract = (a,b) => a - b;
    const divide   = (a,b) => a / b;
    const multiply = (a,b) => a * b;
    const power    = (a,b) => {
      let result = 1;
      for (i=0; i<b; i++) {
        result = result * a
      };
      return result	
    };
    const factorial = (a) => {
      let currentFactor = a;
      let result = 1;
      while (currentFactor>0){
        result = result * currentFactor
        currentFactor = currentFactor - 1;
      };
      return result
    };
    return {
      add,
      subtract,
      divide,
      multiply,
      power,
      factorial,
    };
})();
*/

module.exports = calculator
