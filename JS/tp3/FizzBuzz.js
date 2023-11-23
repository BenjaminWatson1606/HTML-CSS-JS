const readline = require("readline"); // Requirements to use readline for userInput

const rl = readline.createInterface({
  // Function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `Give me a number, as big as you want... I got my buddy Kevin here, he real good at all that math stuff `,
  (userInput) => {
    const parsedInput = parseFloat(userInput);
    // Kevin be checking if ya numbers are actual numbers

    if (!isNaN(parsedInput)) {
      // Loop that goes from 0 to the number given in increments of 1, checking if the number at a given point should output Fizz, Buzz, FizzBuzz or just the number at current index
      for (i = 0; i <= userInput; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
          console.log("FIZZ");
        } else if (i % 5 == 0 && i % 3 != 0) {
          console.log("BUZZ");
        } else if (i % 5 == 0 && i % 3 == 0) {
          console.log("FIZZBUZZ");
        } else {
          console.log(i);
        }
      }
    } else {
      console.log(
        "Kevin smelt the fake numbers from a mile away, Kevin's a good boy... Not like you however..."
      );
    }

    rl.close();
  }
);
