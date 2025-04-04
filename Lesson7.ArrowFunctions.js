// Task 1. Convert to Arrow Functions
// Requirement: Convert the given regular functions into arrow functions.

function multiply(a, b) {
    return a * b;
  }
  // Writhe your code here


  let multiply1 = (a, b) => a*b;
  console.log(multiply1(4, 5)); 
  
  //
  
  function cube(n) {
    return n * n * n;
  }
  // Writhe your code here

  let cube1 = n => n * n * n;
  console.log(cube1(3));

  //
  
  function sayHello(name) {
    return "Hello, " + name + "!";
  }
  // Writhe your code here

  let sayHello1 = name1 => "Hello, " + name1 + "!";
  console.log(sayHello1("Parandzem"));

  //or

  let sayHello2 = name2 => {
    return "Hello, " + name2 + "!";
  }
  console.log(sayHello2("Izabella"));


  // Task 2. Arrow Function with Default Parameters
  // Requirement:
  // Create an arrow function greet that takes a name parameter.
  // The parameter should have a default value of "Guest".
  // The function should return "Hello, [name]!".
  // Writhe your code here


  let greet = (name3 = "Guest")  => `Hello ${name3}!`;

  console.log(greet());
  console.log(greet("Yeprem"));

  
  // Task 3. Calculate Percentage
  // Requirement:
  // Write an arrow function that takes two arguments:
  // total: the total value
  // percentage: the percentage to calculate
  // The function should return the calculated percentage of the total.
  // Writhe your code here

  let calculatePercentage = (total, percentage) => total / 100 * percentage;
  console.log(calculatePercentage(100, 50));

  //or

   let calculate = (total, percentage) => {
    return `Final result ${total / 100 * percentage}`;
   }
   console.log(calculate(100, 20));