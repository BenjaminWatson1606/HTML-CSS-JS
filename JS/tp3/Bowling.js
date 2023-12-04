const prompt = require("prompt-sync")({ sigint: true });

const scoreTable = [];

let throws = 20;

let spare = false;
let strike = false;
let strikeCheck = 0;

for (let i = 1; i <= throws; i++) {
  let userInput;
  let score;

  // Loop until user inputs correct number, can't input isNan and can't input number > 10
  do {
    userInput = prompt(`Enter score ${i}: `);

    // Converts null input to 0
    score = userInput.trim() === "" ? 0 : parseInt(userInput, 10);

    // Check if the input is a valid number and if it's a valid score between 0 and 10
    if (isNaN(score)) {
      console.log("That ain't even a number");
    } else if (score > 10) {
      console.log("How the hell you get more then 10 ? Cheater do it again ");
    }
  } while (isNaN(score) || score > 10);

  // Checks if the user got a spare when i == an even number so only every two throws.
  // Also checks if the user got a strike in those two throws so he cannot get a spare
  // and a strike at the same time.

  if (
    i % 2 === 0 &&
    scoreTable.length >= 1 &&
    scoreTable[scoreTable.length - 1] != 10 &&
    score != 10 &&
    scoreTable[scoreTable.length - 1] + score === 10
  ) {
    console.log("Spare !");
    spare = true;
  }

  // Check if the user got a strike, pretty straightforward for this one
  if (score == 10) {
    console.log("\n STRIIIIIIKE");
    strike = true;
  }
  scoreTable.push(score);

  console.log(`You scored ${score}`);
  console.log();

  if (spare == true) {
    scoreTable[scoreTable.length - 1] += 10;
    spare = false;
    console.log("Spare bonus called");
  }

  if (strike == true) {
    scoreTable[scoreTable.length - 1] += 10;
    strikeCheck++;
    console.log("Strike bonus called");
    if (strikeCheck == 2) {
      strike = false;
    }
  }

  const tempSum = scoreTable.reduce((acc, num) => acc + num, 0);
  console.log("Current score :", tempSum);
  console.log("");

  // Check if in last frame, got a spare or a strike and add bonus balls

  if (i == 19 && score == 10) {
    throws = throws + 2;
    console.log("2 extra throws");
    console.log("");
  } else if (i == 20 && scoreTable[scoreTable.length - 1] + score === 10) {
    throws++;
    console.log("1 extra throw");
    console.log("");
  }
}
console.log("Final Score Table \n");
console.log(scoreTable);
const sum = scoreTable.reduce((acc, num) => acc + num, 0);
console.log("Final score :", sum);
