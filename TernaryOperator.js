// Note: For all the tasks in this file, write the code using both and the conditional branching (if) and the ternary operator(?).
// Task 1: Even or Odd Number
// Write a program that checks if a number is even or odd.
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here

// The first solution

let num = 3;
if (num % 2 === 0) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}

// The second solution
let number = 7;

console.log (
    number % 2 === 0 ? "The number is Even" : "The number is Odd"
);



// Task 2: Pass or Fail
// Ask the user for their exam score (0-100).
// If the score is 50 or above, print "Pass"; otherwise, print "Fail".
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here

// The first solution
let score = 51;
if (score >= 50 && score <=100) {
    console.log("Pass");
}else if (score >= 0 && score < 50) {
    console.log("Fail");
}else {
    console.log("Invalid input");
}



// The second solution
let result = 0;
console.log(
    (result >= 50 && result <= 100) ? "Pass" :
    (result >= 0 && result < 50) ? "Fail" :
    "Invalid input"
);