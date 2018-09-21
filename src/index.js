module.exports = function solveEquation(equation) {
  // your implementation
  
     equation = equation.split(' ').join('');
     let arrA = new Array();
        
           let a = Number.parseInt(equation);
           equation = equation.slice(String(a).length);          
           equation = equation.slice(4);
           if (equation[0] === '+') { equation = equation.slice(1); }
           let b = Number.parseInt(equation);
           equation = equation.slice(String(b).length);
           equation = equation.slice(2);
           if (equation[0] === '+') { equation = equation.slice(1); }
           let c = Number.parseInt(equation);        
      
          let D = Math.pow(b, 2) - 4 * a * c;
          let x1 = (-b + (Math.sqrt(D))) / (2 * a);
          let x2 = (-b - (Math.sqrt(D))) / (2 * a);
          x1 = x1.toFixed(2);
          x2 = x2.toFixed(2);
          x1 = Math.floor(x1);
          x2 = Math.floor(x2);
           
          if (x1 < x2) {
              arrA = new Array(x1, x2);
          }
          else {
              arrA = new Array(x2, x1);
          }
          return arrA;  
}
