const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question("Give me a number: ", (userInput) => {
  // Ensure the user input is a valid number
  const parsedInput = parseInt(userInput);
  if (!isNaN(parsedInput)) {
    // Calls function underneath
    const sum = calculateSum(parsedInput);
    console.log(`The sum of numbers from 0 to ${parsedInput} is: ${sum}`);
  } else {
    console.log(
      "That ain't even a number, can you give me whatever you smoking ?."
    );
  }

  rl.close();
});

// function that loops from 0 to inputted number and gives the result of the sum of all numbers in between
function calculateSum(inputNumber) {
  let sum = 0;

  for (let i = 0; i <= inputNumber; i++) {
    sum += i;
  }

  return sum;
}
