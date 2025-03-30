// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here


function calculateSquare(n, callback) {
    let squareOfN = n ** 2;
    callback(squareOfN);

}
calculateSquare(2, result => console.log(result)
);


// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here


function validation(userName, password, callback){
    
    if (userName === "Garunik" && password === "eshutyun") {
        callback(true);
    } else {
        callback(false);
    }
}
validation("Garunik", "eshutyun", (isValid) => {
    console.log(isValid ? "Logged in" : "Credentials are wrong");
});



//


const userName = "Hamazasp";
const password = "erb123js";

function login(userNameInput, passwordInput, callback){
    if (userNameInput === userName && passwordInput === password){
        callback("You are logged in");
    } else {
       callback("Credentials are incorrect")
    }
}

login("Hamazasp", "erb123js", (message) => {console.log (message);});




// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here

function sumNumbersUpTo(n, callback){
    let sum = 0;
     for(let i = 1; i <= n; i++) {
        sum = sum + i; 
     }
     callback(sum); 
}
sumNumbersUpTo(5, result => {console.log(result)});