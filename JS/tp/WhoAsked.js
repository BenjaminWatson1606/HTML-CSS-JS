const readline = require("readline"); // Requirements to use readline for userInput

const rl = readline.createInterface({
  // Function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name ? `, (userInput) => {
  console.log("Hello " + userInput + "!");
  rl.close();
});
