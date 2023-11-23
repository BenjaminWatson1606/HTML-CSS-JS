const prompt = require("prompt-sync")({ sigint: true });

// User input
const userInput = prompt("Enter the number you want to convert: ");
const baseInput = prompt("Enter the base to which you want to convert the number: ");

// Convert user inout to int
const numberToConvert = parseInt(userInput, 10);
const targetBase = parseInt(baseInput, 10); 

// Checks if the inputs are numbers
if (isNaN(numberToConvert) || isNaN(targetBase)) {
  console.log("Invalid input.");
} else {
  // It's cheating time || Easy answer 
  const convertedNumber = numberToConvert.toString(targetBase);
  console.log(`Result: ${convertedNumber}`);
}


