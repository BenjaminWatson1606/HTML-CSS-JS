const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question("Give me a number: ", (userInput) => {
  const parsedInput = parseInt(userInput);

  if (!isNaN(parsedInput)) {
    // Loop through each level for the staircase and places the appropriate amount of stars
    for (let i = 1; i <= parsedInput; i++) {
      // Print the * 'stairs ?' I guess, kinda spiky
      for (let k = 1; k <= i; k++) {
        process.stdout.write("*");
      }

      process.stdout.write("\n");
    }
  } else {
    console.log("That ain't even a number son, you good?");
  }

  rl.close();
});
