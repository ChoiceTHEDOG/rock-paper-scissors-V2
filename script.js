let numForSelection= Math.floor(Math.random() * 100) + 1;
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0

function getComputerChoice() {
    if(numForSelection >= 1 && numForSelection <= 33) {
        return "rock"
    } else if (numForSelection >= 34 && numForSelection <= 66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getPlayerChoice(selection) {
    selection = prompt("Whats your choice?")
    return selection.toLowerCase();
}


function playSingleRound(playerSelection, computerSelectio) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();    
    if(playerSelection == computerSelection) {
        return "Its a Tie"
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1;
        return "You Win!!! Rock beats Scissors"
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore =+ 1;
        return "Ther computer Wins :(. Paper beats Rock"
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore =+ 1;
        return "You Win!!! Paper beats Rock"
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore =+ 1
        return "Ther computer Wins :(. Scissors beats paper"
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        playerScore =+ 1;
        return "You Win!!! Scissors beats Paper"
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore =+ 1;
        return "Ther computer Wins :(. Scissors beats paper"
    } else {
        return "invalid selection"
    }

}

numForSelection= Math.floor(Math.random() * 100) + 1;

function game(){
    do {
        playSingleRound();
        numForSelection= Math.floor(Math.random() * 100) + 1;
        gamesPlayed = gamesPlayed + 1;
    } while (gamesPlayed < 5);
    if(playerScore > computerScore){
        return "The Player wins whit " + playerScore + " points!!!";
       } else if (playerScore < computerScore) {
        return "The Computer wins whit " + computerScore + " points!!!";
       } else {
        return "Its a Tie"
       }
}
console.log(game())