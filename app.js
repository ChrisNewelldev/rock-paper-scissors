//This function generates one of three choices for the computer to pick
function getComputerChoice (...choices) {
    return choices[Math.floor(Math.random()*choices.length)]

}
const choices = ['rock', 'paper', 'scissors']
let computerSelection = getComputerChoice(...choices)
console.log(computerSelection)

let playerSelection = prompt('Choose...').toLowerCase()

let playerScore = 0
let computerScore = 0
function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'tie'
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            ++ playerScore
            //return 'player wins'
        } else {
            ++ computerScore
            //return 'computer won'
        }
    }  else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            ++ playerScore
            //return 'player wins'
        } else {
            ++ computerScore
            //return 'computer won'
        }
    }  else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            ++ playerScore
            //return 'player wins'
        } else {
            ++ computerScore
            //return 'computer won'
        }
    } else {
        throw 'enter a valid choice'
    }
    }

let roundScore = playRound(playerSelection, computerSelection)
console.log(roundScore)
console.log(playerScore)
console.log(computerScore)
function game (playerScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    } if (playerScore < computerScore) {
        return 'computer wins all'
    } else {
        return 'player wins all'
    }
}

let gameResults = game(playerSelection, computerSelection)
console.log(gameResults)