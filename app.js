function guessingGame() {
  let input = prompt("Guess a number 1-50 !");
  let number = Number(input);
  let ans = 22; //Math.floor(Math.random() * 50 + 1);
  let guessCount = 1;
  let prevGuess = [number]; //number is nested in here since the first input isnt calculated into prevGuess without this additions of [numbers]

  // //problem is that if you click cancel, it will be considered a low number
  // while (number !== ans) {
  //   if (!Number.isInteger(number)) {
  //     number = Number(prompt("Give me a whole number"));
  //     //   prevGuess.push(number);
  //     //   guessCount += 1;
  //     //these codes were redudant and the codes below adjust for it
  //   } else if (number > ans) {
  //     number = Number(prompt(" You went too high! Give me a lower number"));
  //   } else if (number < ans) {
  //     number = Number(prompt(" You went too low! Give me a higher number"));
  //   }
  while (number !== ans) {
    if (number === 0) {
      alert("Bye");
      return;
    }
    if (number > ans) {
      number = Number(prompt(" You went too high! Give me a lower number"));
    } else if (number < ans) {
      number = Number(prompt(" You went too low! Give me a higher number"));
    }
    prevGuess.push(number);
    guessCount++;
  }

  if (guessCount === 1) {
    alert("Correct! Youre amazing! First time guess!");
  } else {
    alert(
      "Correct! It took you " +
        guessCount +
        " tries! Your previous guesses were " +
        prevGuess
    );
  }
  //keeping the function allowed for continue to play until you click 'cancel'
  function playAgain() {
    if (confirm("Do you want to play again? Click OK for Yes") === true) {
      guessingGame();
    } else {
      alert("FINE DONT PLAY AGAIN!");
      return;
    }
  }
  playAgain();
}

guessingGame();

debugger;
