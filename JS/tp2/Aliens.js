﻿const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Give me a number: ", (userInput) => {
  const parsedInput = parseInt(userInput);

  // Checks if number is a number
  if (!isNaN(parsedInput)) {
    // Loop through to place the stars
    for (let i = 1; i <= parsedInput; i++) {
      // for loop to print spaces to place the stars in the correct spot
      for (let j = parsedInput - i; j > 0; j--) {
        process.stdout.write(" ");
      }

      // for loop to actually print the stars this time
      for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write("*");
      }

      // Go to next line
      console.log();
    }
    console.log();
    console.log(
      "WOOOOOOOWEEEEE, Mary get the shotgun I gotta shoot the sky cause that sh*t right there is made by aliens, aliens I tells ya"
    );
  } else {
    console.log("That ain't even a number son, you good?");
  }

  rl.close();
});
