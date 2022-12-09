const choices = ['rock', 'paper', 'scissors']

let computerSelection;
let playerSelection;

let playerScore = 0
let computerScore = 0

let buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
    playerSelection = button.id;

    playRound(playerSelection, computerSelection);
    })
})


function getComputerChoice (...choices) {
    return choices[Math.floor(Math.random()*choices.length)]
}


function playRound (playerSelection, computerSelection) {

    //playerSelection = 'rock'
    console.log('player chooses', playerSelection) 
    computerSelection = getComputerChoice(...choices)
    console.log('computer chooses', computerSelection)
    
    if (playerSelection === computerSelection) {
        console.log('tie')
        console.log('man:', playerScore, 'machine:', computerScore)
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('player wins')
        ++playerScore
        console.log('man:', playerScore, 'machine:', computerScore)
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('computer wins')
        ++computerScore
        console.log('man:', playerScore, 'machine:', computerScore)
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('computer wins')
        ++computerScore
        console.log('man:', playerScore, 'machine:', computerScore)
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        console.log('player wins')
        ++playerScore
        console.log('man:', playerScore, 'machine:', computerScore)
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        console.log('player wins')
        ++playerScore
        console.log('man:', playerScore, 'machine:', computerScore)
    } else if (playerSelection === 'paper' && computerSelection=== 'scissors') {
        console.log('computer wins')
        ++computerScore
        console.log('man:', playerScore, 'machine:', computerScore)
    } else {
        //alert('Please enter Rock, Paper, or Scissors')
    } 
}

function game () {
    for (let i = 0; i < 1000; i++) {
        playRound(playerSelection, computerSelection)
    } if (computerScore > playerScore) {
        console.log('computer wins game')
    } else if (playerScore > computerScore){
        console.log('player wins game')
    } else {
        throw 'tie game'
    }
}

//game()