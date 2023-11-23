const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's the first number ? `, (number1) => {
  rl.question(`What's the second number ? `, (number2) => {
    const parsedNumber1 = parseFloat(number1); // Converts the inputs to numbers
    const parsedNumber2 = parseFloat(number2);
    if (!isNaN(parsedNumber1) && !isNaN(parsedNumber2)) {
      // Checks if the input is an actual number or not
      const result = parsedNumber1 + parsedNumber2;
      console.log(`${parsedNumber1} + ${parsedNumber2} = ${result}`);
    } else {
      console.log(
        "Those aren't even numbers... I think ? I'm not too good with math and sh*t"
      );
    }
    rl.close();
  });
});
