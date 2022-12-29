let numForSelection= Math.floor(Math.random() * 100) + 1;
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0

// Here we get the computer choice using a random number generator 

function ComputerChoice() {
    if(numForSelection >= 1 && numForSelection <= 33) {
        return "rock"
    } else if (numForSelection >= 34 && numForSelection <= 66) {    
        return "paper"
    } else {                            
        return "scissors"
    }
}

// Ask the user for his choice 

// function playerChoice(selection) {
//     return selection;
// }

// Single round logic

function playRound(playerSelection, computerSelection = ComputerChoice()) {
    if(playerSelection == computerSelection) {
        console.log( "Its a Tie")
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1;
        console.log( "You Win!!! Rock beats Scissors")
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore =+ 1;
        console.log( "The computer Wins :(. Paper beats Rock")
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore =+ 1;
        console.log( "You Win!!! Paper beats Rock")
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore =+ 1
        console.log( "The computer Wins :(. Scissors beats paper")
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        playerScore =+ 1;
        console.log( "You Win!!! Scissors beats Paper")
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore =+ 1;
        console.log( "The computer Wins :(. Scissors beats paper")
    } else {
        console.log( "invalid selection")
    }
    numForSelection= Math.floor(Math.random() * 100) + 1;
}

// function game(){
//     do {
//         playRound();
//         gamesPlayed = gamesPlayed + 1;
//     } while (gamesPlayed < 5);
//     if(playerScore > computerScore){
//         return "The Player wins whit " + playerScore + " points!!!";
//        } else if (playerScore < computerScore) {
//         return "The Computer wins whit " + computerScore + " points!!!";
//        } else {
//         return "Its a Tie"
//        }
// }
// console.log(game())

// UI design

const mainContainer = document.querySelector("div");

// buttons creation

const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.addEventListener("click", () => {playRound("rock")});

const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.addEventListener("click", () => {playRound("paper")});

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
scissors.addEventListener("click", () => {playRound("scissors")});

const displayDiv = document.createElement("div");

mainContainer.appendChild(displayDiv);
mainContainer.appendChild(rock);
mainContainer.appendChild(paper);
mainContainer.appendChild(scissors);
