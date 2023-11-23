const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const random = getRandomInt(100);

// Start function that starts game, asks you how many lives you want and then goes and launches the game
function startGame() {
  rl.question("How many bullets can you take ? ", (livesInput) => {
    const livesLeft = parseInt(livesInput);

    // Checks user input
    if (!isNaN(livesLeft) && livesLeft > 0) {
      playGame(livesLeft);
    } else {
      console.log("You can't already be dead, that be cheating");
      startGame();
    }
  });
}

// Loop functions that check based on the number of lives left if you can play, what you decide to play and if what you played was good or not
function playGame(livesLeft) {
  function checkGuess(userGuess) {
    const parsedInput = parseFloat(userGuess);
    // Check numbers as always Kevin
    if (!isNaN(parsedInput)) {
      // I mean like you win, that's the correct answer
      if (parsedInput === random) {
        console.log(
          "That's the right number, guess you can survive, for now anyways "
        );

        // Thanks ChatGPT, I mean Kevin for fixing the asynchronous error (prayge)
        setTimeout(() => {
          rl.close();
        }, 50);
      } else if (parsedInput < random) {
        console.log("Too low. Shoot him Kevin. ");
      } else {
        console.log("Too high. Shoot him Kevin");
      }

      livesLeft--;

      // You died, no more lives left, ran out, gone, he dead
      if (livesLeft === 0) {
        console.log(
          "That was you're last life, it was " +
            random +
            " sad to see you go... Kevin you know what to do "
        );
        rl.close();
      } else {
        rl.question(`Try again: ${livesLeft} `, checkGuess);
      }
    } else {
      console.log("What you smoking ?");
      rl.question(`Try again: ${livesLeft} `, checkGuess);
    }
  }
  // Asks what number you choosing
  rl.question(
    `Guess a number between 0 and 100. Lives left: ${livesLeft} `,
    checkGuess
  );
}

startGame();
