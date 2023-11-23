const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question("Give me a number: ", (userInput) => {
  const parsedInput = parseInt(userInput);
  // checking numbers as always, good day sir
  if (!isNaN(parsedInput)) {
    // Loop through to place stars to the top of the pyramid
    for (let i = 1; i <= parsedInput; i++) {
      // Them egyptians don't build pyramids like I do, this is only the first half though, don't judge just quite yet please and thank you kind sir or mam
      for (let k = 1; k <= i; k++) {
        process.stdout.write("*");
      }

      process.stdout.write("\n");
    }
    // Loop through to place stars from the top to the bottom of the pyramid, so top -1 is starting point
    for (let i = 1; i <= parsedInput; i++) {
      // Now that's a pyramid, prints out the stars
      for (let k = parsedInput - 1; k >= i; k--) {
        process.stdout.write("*");
      }

      process.stdout.write("\n");
    }
  } else {
    console.log("That ain't even a number son, you good?");
  }

  rl.close();
});
