const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question("What in tarnation you making ? ", (priceInput) => {
  rl.question("How pricey that be ? ", (storePrice) => {
    const parsedNumber1 = parseFloat(priceInput); // Converts the inputs to numbers
    const parsedNumber2 = parseFloat(storePrice);
    if (!isNaN(parsedNumber1) && !isNaN(parsedNumber2)) {
      // Checks if the input is an actual number or not
      const result = parsedNumber2 - parsedNumber1;

      // Takes the inputs of store price and production price and calculates if you are selling the item cheaper, more expensive or at the same price as production price
      if (priceInput > storePrice) {
        console.log("You losing me money boy " + result);
      } else if (priceInput == storePrice) {
        console.log("Right on the money");
      } else {
        console.log(
          "What the hell you thinkin boy ? That's an extra " +
            result +
            "$ for papa"
        );
      }
    } else {
      console.log("Those aren't even numbers boy, you speaking gibberish... ");
    }
    rl.close();
  });
});
