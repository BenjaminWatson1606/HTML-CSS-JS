const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

// Asks for userinput as usual and checks in which category his inputted age should be
rl.question("How old are ya ? ", (userAge) => {
  const parsedNumber = parseFloat(userAge);
  if (!isNaN(parsedNumber)) {
    if (userAge >= 12) {
      console.log("Cadet");
    } else if (userAge >= 10 && userAge < 12) {
      console.log("Minime");
    } else if (userAge >= 8 && userAge < 10) {
      console.log("Pupille");
    } else {
      console.log("Poussin");
    }
  } else {
    console.log("What even is that ?");
  }
  rl.close();
});
