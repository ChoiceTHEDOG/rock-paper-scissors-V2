// Declaration of general variables
let numForSelection= Math.floor(Math.random() * 100) + 1;
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0

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

const playerResults = document.createElement("div");
playerResults.setAttribute("id", "playerResultDiv");

const computerResults = document.createElement("div");
computerResults.setAttribute("id", "computerResultDiv");

mainContainer.appendChild(rock);
mainContainer.appendChild(paper);
mainContainer.appendChild(scissors);
mainContainer.insertBefore(displayDiv, rock);
displayDiv.appendChild(playerResults);
displayDiv.appendChild(computerResults);

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

// This track the results of each round

function updatePlayerResults(){
    playerResults.textContent = "The player score is: " + playerScore;
}

function updateComputerResults(){
    computerResults.textContent = "The computer score is " + computerScore;
}

updateComputerResults();
updatePlayerResults();

// Single round logic

function playRound(playerSelection, computerSelection = ComputerChoice()) {
    numForSelection = Math.floor(Math.random() * 100) + 1;
    if(playerSelection == computerSelection) {
        alert("Its a Tie");
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        updatePlayerResults();
        return "You Win!!! Rock beats Scissors"
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        updateComputerResults();
        return "The computer Wins :( Paper beats Rock"
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        updatePlayerResults();
        return "You Win!!! Paper beats Rock"
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        updateComputerResults();
        return "The computer Wins :(. Scissors beats paper"
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        updatePlayerResults();
        return "You Win!!! Scissors beats Paper"
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        updateComputerResults();
        return "The computer Wins :( Rock beats paper"
    } else {
        return "invalid selection"
    }
}

// decide who wins

function winner(){
    if(playerScore == 5) {
        alert("The player wins!!!") 
    } else if(computerScore == 5) {
        alert("The computer wins!!!")
    }
}