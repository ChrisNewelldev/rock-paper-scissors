const choices = ['rock', 'paper', 'scissors']

let computerSelection;
let playerSelection;

let playerScore = 0
let computerScore = 0

function getComputerChoice (...choices) {
    return choices[Math.floor(Math.random()*choices.length)]
}


function playRound (playerSelection, computerSelection) {

    computerSelection = getComputerChoice(...choices)
    console.log('computer chooses', computerSelection)
    playerSelection = prompt('Choose...').toLowerCase()
    console.log('player chooses', playerSelection) 

    if (playerSelection === computerSelection) {
        console.log('tie')
        return 'tie'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('player wins')
        ++playerScore
        return playerScore
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('computer wins')
        ++computerScore
        return computerScore
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('computer wins')
        ++computerScore
        return computerScore
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('player wins')
        ++playerScore
        return playerScore
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log('player wins')
        ++playerScore
        return playerScore
    } else if (playerSelection === 'paper' && computerSelection=== 'scissors') {
        console.log('computer wins')
        ++computerScore
        return computerScore
    } else {
        console.log('something is broken')
    }
}

function game (playerScore, computerScore) {
    playRound()
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection)
    } if (computerScore == 5) {
        console.log('computer wins game')
        return 'computer wins all'
    } else if (playerScore == 5){
        console.log('player wins game')
        return 'player wins all'
    } else {
        throw 'game not complete'
    }
}

game()