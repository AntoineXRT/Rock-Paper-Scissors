// GAME

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
        alert("tie")
    } else if (
        (computerSelection == 'paper' && playerSelection == 'rock') ||
        (computerSelection == 'rock' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'paper')
    ) {
        alert("Oops,Bad luck")
        computerScore++
    } else {  
        alert("Nice!")
        playerScore++
    }
}



let computerSelection = computerPlay();


function game (roundAmount){
    for (let i = 0; i < roundAmount; i++){
        let playerSelection = prompt('Enter Your Answer');
        gameRound ( playerSelection, computerSelection);
        }
        if (computerScore == playerScore) {
            alert("Its an Ultimate tie")
        } else if ( computerScore < playerScore ) {
            alert("Congratulations , You WON!")
        } else {
            alert("Sorry, You lost.Try again")
        }
        
}
game(roundAmount);


// UI