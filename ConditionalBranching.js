// Note: For all the tasks in this file, use only conditional branching (if).
// Task 1: Check Positive, Negative, or Zero
// Write a program that takes a number as input and checks if it is positive, negative, or zero.
// Write your code here

let num = "uyhasd";
if (num > 0) {
    console.log("It is positive")
}
else if (num <0) {
    console.log("It is negative")
}
else if (num === 0) {
    console.log("It is Zero")
}
else console.log("Invalid input")


// Task 2: Grade Calculator
// Write a program that takes a student's score (0-100) and assigns a letter grade:
// 90-100 → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// < 60 → F
// // Write your code here

let grade = 1;
if (grade >= 90 && grade <=100) {
    console.log("A");
    
}
else if(grade >=80 && grade <=89) {
    console.log("B");
} 
else if(grade >=70 && grade <=79) {
    console.log("C");    
} 
else if (grade >= 60 && grade <=69) {
    console.log ("D")
}
else if (grade < 60 && grade >= 0) {
    console.log("F")
}
else {console.log("Invalid score")

};


// Task 3: Weekend Checker
// Ask the user to enter a day of the week (e.g., "Monday", "Saturday").
// Print "It's the weekend!" if it's Saturday or Sunday, otherwise print "It's a weekday".
// Write your code here

let weekday= "Monday";
if (weekday == "Saturday" || weekday == "Sunday") {
    console.log("It's the weekend!");
}
else if (weekday == "Monday"|| weekday == "Tuesday"|| weekday == "Wednesday"|| weekday =="Thursday"|| weekday =="Friday") {
    console.log("It's a weekday");
}
else {console.log("Not a weekday")
};



// Task4: Game Score Adjuster
// Problem Statement:
// You are developing a simple game where the player starts with 10 points.
// If they answer a question correctly, their score increases by 1 (++).
// If they answer incorrectly, their score decreases by 1 (--).
// The program should check if the player’s score has reached 0 and print "Game Over" if true.
// Steps to Implement:
// Initialize score = 10.
// Ask the user if their answer is correct (true/false).
// Use if-else with ++ and -- to update the score.
// If the score reaches 0, print "Game Over".
// Otherwise, print the updated score.
// Write your code here

let score = 1;
let answer = false;

if (answer === true) {
    ++score;
} else {
    --score;
}

if (score === 0) {
    console.log("Game Over");
} else {
    console.log("Back to the Game");
};