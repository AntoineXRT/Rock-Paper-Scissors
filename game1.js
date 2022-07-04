let playerScore = 0
let computerScore = 0
roundAmount = 5
const selArray = ['Rock', 'Paper', 'Scissors'];


    function computerPlay () {
      return selArray[~~(Math.random() * selArray.length)]
}

    

function gameRound ( playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    

    if (computerSelection == playerSelection) {
        alert("its a tie")
    } else if (
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ) {
        alert("Sorry, You lost. Try again")
        computerScore++
    } else {
        alert("You won!")
        playerScore++
    }
}


let computerSelection = computerPlay();


function game (roundAmount){
    for (let i = 0; i < roundAmount; i++){
        let playerSelection = prompt('Enter Your Answer');
        gameRound ( playerSelection, computerSelection); 
    }
}
game(roundAmount);