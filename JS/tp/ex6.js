const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question("Give me a number boy ", (numberInput) => {
  const parsedNumber1 = parseFloat(numberInput); // Converts the inputs to numbers
  if (!isNaN(parsedNumber1)) {
    // Checks if the input is an actual number or not
    if (parsedNumber1 % 2 == 0) {
      console.log("That's an even number boy");
    } else {
      console.log("That's an odd fella right there");
    }
  } else {
    console.log("What even is that ?");
  }

  rl.close();
});
