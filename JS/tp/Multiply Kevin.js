const readline = require("readline"); // requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question("Give me a number boy ", (numberInput) => {
  const parsedNumber = parseFloat(numberInput); // Converts the inputs to numbers

  if (!isNaN(parsedNumber)) {
    // Checks if the input is an actual number or not
    console.log(`I count good for ya ${parsedNumber}:`);

    // Loops from 1 to 10 the multiplication of inputted number and outputs in console results
    for (let i = 1; i <= 10; i++) {
      const result = parsedNumber * i;
      console.log(`${parsedNumber} * ${i} = ${result}`);
    }
  } else {
    console.log("Those aren't even numbers boy");
  }

  rl.close();
});
