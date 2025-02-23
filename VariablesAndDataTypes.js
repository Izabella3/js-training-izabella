// Task 1: Identify When to Use let or const
// Below are some situations. Decide whether let or const should be used and declare the variables accordingly.

// 1. A variable that stores a user's name and does not change.
const userName='John';
// 2. A counter that starts from 0 and will be updated later.
let counter=0;
// 3. The value of Pi (3.14159).
const Pi=3.14159;
// 4. A variable to hold a user’s age, which might be updated later.
let userAge=26;
// 5. A list of colors that should remain the same throughout the program.
const COLOR_BLUE="#00F";
const COLOR_OFFWHITE="#FAF9F6";
const COLOR_BLUEGREEN="#0D98BA";
const COLORS = ["#00F", "#FAF9F6", "#0D98BA"]; // if the colors should remain as a list 
// Write your answers in JavaScript:

// Task 2: Use typeof to Check Data Types
// Declare variables of different types:

// - A number
let age=23;
console.log(typeof age);
// - A string
let fullName='John Gomes';
console.log(typeof fullName);
// - A boolean
let value=true;
console.log(typeof value);
// - null
let value1=null;
console.log(typeof value1);
// - undefined
let value2;
console.log(typeof value2);
// - A symbol
let id= Symbol(12);
console.log(typeof id);
// - A BigInt
const pi=3n;
console.log(typeof pi);
// Use typeof to check and log their types.
// Example:
// let num = 5
// console.log(typeof num)
// Write your answers in JavaScript:

// Task 3: Convert Different Values to Strings, Numbers and Booleans
// Log the result and write the answer next to the console.log() statement
// Example:
// Convert the following number to a string and log the result:

const orderNumber = 98765;
console.log(String(orderNumber)); // output -> "98765"
// Convert the following boolean to a string and log the result:

const isActive = true;
console.log(String(isActive)); // output -> "true"

// Convert the following string to a number and log the result:

const price = "49.99";
console.log(Number(price)); // output -> "49.99"
// Convert the following boolean to a number and log the result:

const hasAccess = false;
console.log(Number(hasAccess)); // output -> "0"

// Convert the following empty string to a number and log the result:

const emptyText = "";
console.log(Number(emptyText)); // output -> "0"

// Convert the following string to a boolean and log the result:

const username = "JohnDoe";
console.log(Boolean(username)); // output -> "true"

// Convert the following number to a boolean and log the result:

const itemCount = 0;
console.log(Boolean(itemCount)); // output -> "false"
// Convert the following undefined value to a number and log the result:

const notDefined = undefined;
console.log(Number(notDefined)); // output -> "NaN"

// Convert the following string containing spaces to a boolean and log the result:

const spaceString = "   ";
console.log(Boolean(spaceString)); // output -> "true"

// Convert the following null value to a string and log the result:

const emptyValue = null;
console.log(String(emptyValue)); // output -> "null"

let emptymalue;
console.log(Number(emptymalue)); // output -> "null"