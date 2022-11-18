let numForSelection= Math.floor(Math.random() * 100) + 1;
console.log(numForSelection)

function getComputerChoice() {
    if(numForSelection >= 1 && numForSelection <= 33) {
        return "rock"
    } else if (numForSelection >= 34 && numForSelection <= 66) {
        return "paper"
    } else {
        return "scissors"
    }
}
console.log("la computadora elige " + getComputerChoice())

function getPlayerChoice(selection) {
    selection = prompt("Whats your choice?")
    return selection.toLowerCase();
}
// console.log(getPlayerChoice())

function decideWinner(playerChoice, computerChoice) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();    
    if(playerChoice == computerChoice) {
        return "Its a Tie"
    } else if(playerChoice == "rock" && computerChoice == "scissors") {
        return "You Win!!! Rock beats Scissors"
    } else if(playerChoice == "rock" && computerChoice == "paper") {
        return "Ther computer Wins :(. Paper beats Rock"
    } else if(playerChoice == "paper" && computerChoice == "rock") {
        return "You Win!!! Paper beats Rock"
    } else if(playerChoice == "paper" && computerChoice == "scissors") {
        return "Ther computer Wins :(. Scissors beats paper"
    } else if(playerChoice == "scissors" && computerChoice == "paper") {
        return "You Win!!! Scissors beats Paper"
    } else if(playerChoice == "scissors" && computerChoice == "rock") {
        return "Ther computer Wins :(. Scissors beats paper"
    } else {
        return "invalid selection"
    }
}
console.log(decideWinner())













// function playOneRound(computerChoice, playerChoice) {
//     computerChoice = getComputerChoice
//     playerChoice = getPlayerChoice
// }
// console.log(playOneRound())
numForSelection= Math.floor(Math.random() * 100) + 1;