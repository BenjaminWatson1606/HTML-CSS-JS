const readline = require("readline"); // Requirements to use readline for userInput

const rl = readline.createInterface({
  // Function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

// Pretty simple, just asks for input and then outputs the input with Hello in front of it, no checks whatsoever
rl.question(`What's your name ? `, (userInput) => {
  console.log("Hello " + userInput + "!");
  rl.close();
});
