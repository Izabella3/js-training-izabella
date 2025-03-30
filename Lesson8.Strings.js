// // Task 1: Get String Length
// // Requirement: Write a function that receives
// // a string as input and returns the length of the string.
// // Write your code here!


function strLength(str) {
   
    return str.length;
}
console.log(strLength("zhamanakakits"));

// or

let stringLength = (string) => console.log(string.length);
stringLength( "Arkepiskopos");


// // Task 2: Print Each Character
// // Requirement: Write a function that receives a string and prints each character on a new line.
// // The function should validate that the input is a string and that its length is between 1 and 50 characters.
// // If the input is invalid, display an appropriate message.
// // Write your code here!


const { userInput } = require("./UserInput");
const input = userInput("Write a string for calculation:   ")

let stringCalculator = (input) => {
    if (typeof input !== "string"){
        return "Invalid input, plrease enter a string"
    } 
    
    input = input.trim();
    
    if (input.length === 0) {
        return "Spaces only are not valid"
    } else if (input.length > 50){
        return "Maximum acceptable char count is 50"
    } else {
        for (let char of input) {
            console.log(char)
        }
        
    }
};
   stringCalculator(input);


// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).
// Write your code here!


function toUppercase(fullName) {
    if (typeof fullName !== "string") {
        return "Invalid input, please enter characters";
    }

    fullName = fullName.trim();

    let spaceCount = 0;
    let spaceIndex = -1;
    
    for (let i = 0; i < fullName.length; i++) {
        if (fullName[i] === " ") {
            spaceCount++;
            spaceIndex = i;
        }
    }

    if (spaceCount !== 1 || spaceIndex === 0 || spaceIndex === fullName.length - 1) {
        return "Invalid input. Name and surname required.";
    }

    let result = "";
    for (let i = 0; i < fullName.length; i++) {
        if (i === 0 || fullName[i - 1] === " ") {
            result += fullName[i].toUpperCase();
        } else {
            result += fullName[i].toLowerCase();
        }
    }

    return result;
}

console.log(toUppercase("siranuysh hambardzumyan"));
console.log(toUppercase(" "));


     
// Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.
// Write your code here!


function alternate(saintString){
    if(typeof saintString !== "string"){
        return "Incorrect input";
    } 
    if (saintString.length < 10 || saintString.length > 20){
        return "The string should be with a minimum length of 10 and a maximum length of 20 characters";
    }

    let result = ""; 
    for (let i = 0; i < saintString.length; i++) {
        if (i % 2 === 0) {
            result = result + saintString[i].toUpperCase();  
    }else {
        result = result + saintString[i].toLowerCase();
    }
   
}
     return result;
} 

console.log(alternate("bazmapatkum"));

// Task 5: Check Palindrome
// Requirement: Write a function that receives a string and checks if the string is a palindrome
// (i.e., the string is the same forwards and backwards).
// The function should return true if the string is a palindrome and false otherwise.
// Ignore spaces and punctuation.
// Example:
// Input: "racecar"
// Output: true
// Explanation: The string "racecar" is the same forwards and backwards, so the output is true.
// Write your code here!



function isPalindrome(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr = reversedStr + str[i];
    }
    
    return str === reversedStr;
}
console.log(isPalindrome("kayak"));
console.log(isPalindrome("balloon"));



// Task 6: Count Specific Character in String
// Requirement: Write a function that receives two values: a main string and a character.
// The function should return how many times the specified character appears in the string.
// Write your code here!


let strg = "ashkhatakic";
let target = "a";
let pos = 0;
let counter = 0;

while (true) {
    let foundPos = strg.indexOf(target, pos);
    if (foundPos === -1) break;
    
    counter++;
    pos = foundPos + 1; 
}

console.log(counter);
