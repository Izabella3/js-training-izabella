// 1. While Loop Task – Reverse Counting
// Requirements:

// Start from 10 and count down to 1.
// Use a while loop.
// Print each number in the console.
// Write your code here


let a = 10;
while (a >= 1) {
    console.log (a);
a--;
}



// 2. Do-While Loop Task – User Input Until Negative Number
// Requirements:

// Continuously ask the user to enter a number.
// Stop asking when the user enters a negative number.
// Use a do-while loop.
// Print each entered number.
// After exiting, print a message indicating the loop has ended.
// Write your code here



const { userInput } = require("./UserInput");

let input;
console.log(input);
do {
    input = userInput ("Please provide number < 0: ");
    console.log(input);
} while (+input >= 0 && !isNaN(+input));
console.log('End of Loop');




// 3. For Loop Task – Multiplication Table
// Requirements:

// Choose a number (e.g., 5).
// Use a for loop to print the multiplication table from 1 to 10.
// Print the result in the format: 5 x 1 = 5.
// Write your code here


let b = 5;
for (let h = 1; h <=10; h++) {
    console.log(`${b} x ${h} = ${b * h}`);
}


// 4. Break Statement Task – Find the First Multiple of 7
// Requirements:

// Use a for loop to check numbers from 1 to 50.
// Find the first number that is a multiple of 7.
// Print the number and exit the loop using break.
// Write your code here



for (let f = 1; f <= 50; f++) {
    if (f % 7 == 0) {
   console.log(f);
break;
 }
}



// 5. Continue Statement Task – Skip Multiples of 3
// Requirements:

// Use a for loop to print numbers from 1 to 20.
// If a number is a multiple of 3, skip it using continue.
// Print the rest of the numbers normally.
// Write your code here



for (let d = 1; d <= 20; d++) {
    if(d % 3 == 0) continue;
    console.log(d);  

}



// 6. Nested Loop Task – Print a Square of Stars
// Requirements:

// Use nested for loops to print a square pattern of stars (*).
// The square should have a size of 4x4 (4 rows and 4 columns).
// Your output should be:
//   * * * *
//   * * * *
//   * * * *
//   * * * *
// Write your code here

for (let i = 1; i <= 4; i++) {
   
    let stars = '';
    for (let j = 1; j <= 4; j++) {
        stars = stars + '* ';
    
}
console.log(stars);
}