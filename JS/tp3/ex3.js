const prompt = require("prompt-sync")({ sigint: true });

const scoreTable = [];

for (let i = 1; i <= 10; i++) {
    let userInput;
    let score;

    // Loop until user inputs correct number, can't input isNan and can't input number > 10
    do {
        userInput = prompt(`Enter score ${i} (press Enter for 0): `);

        // Converts null input to 0
        score = userInput.trim() === "" ? 0 : parseInt(userInput, 10);

        // Check if the input is a valid number and if it's a valid score between 0 and 10
        if (isNaN(score)) {
            console.log("Invalid input. Please enter a number.");
        } else if (score > 10) {
            console.log("Score cannot be greater than 10. Please enter a valid score.");
        }
    } while (isNaN(score) || score > 10);

    // Checks if the user got a strike or a spare

    // Checks if the user got a spare when i == an even number, that's honking smart Kevin
    if (i % 2 === 0 && scoreTable.length >= 1 && scoreTable[scoreTable.length - 1] + score === 10) {
        console.log("Spare !");
    }

    if(score == 10){
        console.log("\n STRIIIIIIKE");
    }
    console.log(`You scored ${score}`);
    console.log();
    scoreTable.push(score);
}
console.log("Final Score Table \n");
console.log(scoreTable);
const sum = scoreTable.reduce((acc, num) => acc + num, 0);
console.log("Sum of the numbers:", sum);
