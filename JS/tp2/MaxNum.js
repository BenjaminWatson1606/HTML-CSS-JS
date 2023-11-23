const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Give me a number `, (number1) => {
  rl.question(`Give me a second number `, (number2) => {
    rl.question("Give me a third one ", (number3) => {
      const parsedNumber1 = parseFloat(number1); // Converts the inputs to numbers
      const parsedNumber2 = parseFloat(number2);
      const parsedNumber3 = parseFloat(number3);
      // Checks if the input is an actual number or not
      if (!isNaN(parsedNumber1) && !isNaN(parsedNumber2) && !isNaN(parsedNumber3)) {
        const maxNumber = Math.max(parsedNumber1, parsedNumber2, parsedNumber3); // Uses Math.max to check which number is the largest
        console.log(`The big one's : ${maxNumber}`);
      } else {
        console.log("Those aren't even numbers son, you good ? ");
      }
      rl.close();
    });
  });
});
