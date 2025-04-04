// Task 1: Function Declaration
// Requirement: Declare a function using the function declaration syntax.
// The function should accept two parameters: 'firstName' and 'lastName',
// and return a full name by combining both parameters with a space in between.
// Write your code here


//Case 1

function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName)
}   
fullName('Izabella', 'Sargsyan');

//Case 2

function fullName1(){
    let firstName = "Varazdat";
    let lastName = "Harutyunyan";
    console.log(firstName + " " + lastName)
}
fullName1();

// Task 2: Function Expression
// Requirement: Declare a function using a function expression.
// The function should accept a number as a parameter and return whether the number is even or odd.
// Write your code here


const numberDetection = function  (number){
    
    if (+number % 2 === 0){
        
        return "even";
    }
        else {
        return "odd";
        }
      
};
console.log(numberDetection (2));
console.log(numberDetection (5));


  

// Task 3: Default Value with an Optional Parameter
// Requirement: Create a function that accepts a 'discount' parameter for an item price.
// If no 'discount' is provided, it should default to 0%. The function should calculate and return the final price after applying the discount.
// Write your code here

function calculateFinalPrice(price, percentage = 0) {
    if (percentage < 0) {
        return "The discount percentage should be greater or equal to 0.";
    }
    let finalPrice = price - (price * percentage) / 100;
    return finalPrice;
}

console.log(calculateFinalPrice(100, 5));
console.log(calculateFinalPrice(100, 0));
console.log(calculateFinalPrice(100, -5));