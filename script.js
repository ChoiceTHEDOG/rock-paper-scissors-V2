// Declaration of general variables
let numForSelection= Math.floor(Math.random() * 100) + 1;
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0

// UI design

const mainContainer = document.querySelector("div");

// buttons creation

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer")
mainContainer.appendChild(buttonContainer);

const rock = document.createElement("button");
rock.textContent = "ROCK";
rock.classList.add("buttons")
rock.addEventListener("click", () => {playRound("rock")});
buttonContainer.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "PAPER";
paper.classList.add("buttons")
paper.addEventListener("click", () => {playRound("paper")});
buttonContainer.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS";
scissors.classList.add("buttons")
scissors.addEventListener("click", () => {playRound("scissors")});
buttonContainer.appendChild(scissors);

// results display 

const displayDiv = document.createElement("div");
displayDiv.setAttribute("id", "displayDiv");
mainContainer.insertBefore(displayDiv, buttonContainer);

const playerResults = document.createElement("div");
playerResults.setAttribute("id", "playerResultDiv");
playerResults.classList.add("viewDivs");
displayDiv.appendChild(playerResults);

const computerResults = document.createElement("div");
computerResults.setAttribute("id", "computerResultDiv");
computerResults.classList.add("viewDivs");
displayDiv.appendChild(computerResults);

const winnerDisplay = document.createElement("div");
winnerDisplay.setAttribute("id", "winnerDisplay")
winnerDisplay.classList.add("viewDivs");
winnerDisplay.textContent = "Click a button to play!"
displayDiv.insertBefore(winnerDisplay, computerResults);

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
        winnerDisplay.textContent = "Its a Tie";
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        updatePlayerResults();
        winner();
        winnerDisplay.textContent = "You Win!!! Rock beats Scissors"
    } else if(playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        updateComputerResults();
        winner();
        winnerDisplay.textContent = "The computer Wins :( Paper beats Rock"
    } else if(playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        updatePlayerResults();
        winner();
        winnerDisplay.textContent = "You Win!!! Paper beats Rock"
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        updateComputerResults();
        winner();
        winnerDisplay.textContent = "The computer Wins :( Scissors beats paper"
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        updatePlayerResults();
        winner();
        winnerDisplay.textContent = "You Win!!! Scissors beats Paper"
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        updateComputerResults();
        winner();
        winnerDisplay.textContent = "The computer Wins :( Rock beats paper"
    } 
}

// decide who wins

function winner(){
    if(playerScore == 5) {
        alert("The player wins the game!!!") 
    } else if(computerScore == 5) {
        alert("The computer wins! the game!!!")
    } 
}