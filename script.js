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

// Single round logic

function playRound(playerSelection, computerSelection = ComputerChoice()) {
    numForSelection= Math.floor(Math.random() * 100) + 1;
    if(playerSelection == computerSelection) {
        return "Its a Tie"
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1;
        return "You Win!!! Rock beats Scissors"
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore =+ 1;
        return "The computer Wins :(. Paper beats Rock"
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore =+ 1;
        return "You Win!!! Paper beats Rock"
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore =+ 1
        return "The computer Wins :(. Scissors beats paper"
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        playerScore =+ 1;
        return "You Win!!! Scissors beats Paper"
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore =+ 1;
        return "The computer Wins :(. Scissors beats paper"
    } else {
        return "invalid selection"
    }
}

function game(){
    do {
        playRound();
        gamesPlayed = gamesPlayed + 1;
    } while (gamesPlayed < 5);
    if(playerScore > computerScore){
        return `The Player wins whit " + ${playerScore} + " points!!!`;
       } else if (playerScore < computerScore) {
        return `The Computer wins whit " + ${computerScore} + " points!!!`;
       } else {
        return "Its a Tie"
       }
}

let totalScore = `Player Score: ${playerScore} Computer Score: ${computerScore}`

// UI design

const mainContainer = document.querySelector("div");

// buttons creation

const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.classList.add("button")
rock.addEventListener("click", () => {playRound("rock")});

const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.classList.add("button")
paper.addEventListener("click", () => {playRound("paper")});

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
scissors.classList.add("button")
scissors.addEventListener("click", () => {playRound("scissors")});

const displayDiv = document.createElement("div");
displayDiv.setAttribute("id", "displayDiv");
displayDiv.textContent = `Results:  \n ${totalScore}` ;

mainContainer.appendChild(displayDiv);
mainContainer.appendChild(rock);
mainContainer.appendChild(paper);
mainContainer.appendChild(scissors);
