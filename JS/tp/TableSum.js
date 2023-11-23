const readline = require("readline"); // requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

const table = [];

rl.question("Give me a number boy ", (number1) => {
  rl.question("Give me another one ", (number2) => {
    rl.question("And another one ", (number3) => {
      rl.question("Keep her going ", (number4) => {
        rl.question("Last one, better be nice ", (number5) => {
          // Parse input to numbers
          const parsedNumber1 = parseFloat(number1);
          const parsedNumber2 = parseFloat(number2);
          const parsedNumber3 = parseFloat(number3);
          const parsedNumber4 = parseFloat(number4);
          const parsedNumber5 = parseFloat(number5);

          // Check if the input is a valid number
          if (
            !isNaN(parsedNumber1) &&
            !isNaN(parsedNumber2) &&
            !isNaN(parsedNumber3) &&
            !isNaN(parsedNumber4) &&
            !isNaN(parsedNumber5)
          ) {
            // Add numbers to the array , was absolutely not necessary to do it like this, but why the hell not ?
            table.push(
              parsedNumber1,
              parsedNumber2,
              parsedNumber3,
              parsedNumber4,
              parsedNumber5
            );

            // Calculate and print the sum
            const sum = table.reduce((acc, num) => acc + num, 0);
            console.log("Sum of the numbers:", sum);
          } else {
            console.log("Those aren't even numbers boy");
          }

          rl.close();
        });
      });
    });
  });
});
