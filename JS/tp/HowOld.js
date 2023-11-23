const readline = require("readline"); //requirements to use readline for userInput

const rl = readline.createInterface({
  // function that permits userInput
  input: process.stdin,
  output: process.stdout,
});

rl.question("How old are ya ? ", (userAge) => {
  if (userAge >= 12) {
    console.log("Cadet");
  } else if (userAge >= 10 && userAge < 12) {
    console.log("Minime");
  } else if (userAge >= 8 && userAge < 10) {
    console.log("Pupille");
  } else {
    console.log("Poussin");
  }
  rl.close();
});
