const readline = require("readline"); // Requirements to use readline for userInput

const rl = readline.createInterface({
  // Function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question("Give me a number boy ", (numberInput) => {
  const parsedNumber1 = parseFloat(numberInput); // Converts the inputs to numbers
  if (!isNaN(parsedNumber1)) {
    // Checks if the input is an actual number or not
    if (parsedNumber1 == 0) {
      console.log("That's a zero");
    } else if (parsedNumber1 > 0) {
      console.log("That's a positive fella right there");
    } else {
      console.log(
        "I don't want to associate with a negative fella the likes of you"
      );
    }
  } else {
    console.log("Those aren't even numbers boy");
  }

  rl.close();
});
