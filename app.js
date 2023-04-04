let players = {}

function guessingGame() {
    let name1 = prompt('Please Enter Your Name')
    let input = prompt('Guess a number 1-50 !') //could be number=promptInt('insert prompt') this will return an integer as the answer instead of two variables doing this
    let number = Number(input)
    let ans = 22 //Math.floor(Math.random() * 50 + 1);
    let guessCount = 1
    let prevGuess = [number] //number is nested in here since the first input isnt calculated into prevGuess without this additions of [numbers]
    //the code below helped with the fact i could not cancel out
    //the return allows for moving forward with the function, MUST be in a function
    while (number !== ans) {
        if (number === 0) {
            alert('Bye')
            return
        }
        if (!Number.isInteger(number)) {
            number = Number(prompt(`${name1} Give me a whole number`))
        }
        if (number > ans) {
            number = Number(
                prompt(`${name1} You went too high! Give me a lower number`)
            )
        } else if (number < ans) {
            number = Number(
                prompt(`${name1} You went too low! Give me a higher number`)
            )
        }
        prevGuess.push(number)
        guessCount++
    }

    if (guessCount === 1) {
        alert('Correct! Youre amazing! First time guess!')
    } else {
        alert(
            `Correct! It took you ${guessCount} tries! Your previous guesses were ${prevGuess}`
        )
    }

    //keeping the function allowed for continue to play until you click 'cancel'
    function playAgain() {
        if (confirm('Do you want to play again? Click OK for Yes') === true) {
            guessingGame()
        } else {
            alert('FINE DONT PLAY AGAIN!')
            return
        }
    }

    if (players[name1] !== undefined) {
        let numGuesses = prevGuess.length
        let previousGuesses = players[name1].length
        console.log(previousGuesses)
        if (numGuesses > previousGuesses) {
            alert(
                `That is correct ${name1} ! you did better in your last game by ${
                    numGuesses - previousGuesses
                }`
            )
        } else if (numGuesses < previousGuesses) {
            alert(
                `That is Correct ${name1}! and you beat your previous attempt by ${
                    previousGuesses - numGuesses
                } fewer guesses`
            )
        }
    }
    players[name1] = prevGuess

    playAgain()
}

guessingGame()

//debugger //debugger lets you see what is going on at each step of the function in the console/dev tools
