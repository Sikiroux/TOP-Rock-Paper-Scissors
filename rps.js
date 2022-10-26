// Getting choice from the computer
// Use random choice between 1 and 3, 1 for rock, 2 for paper, 3 for scissors.

function getComputerChoice() {
    compChoice = Math.floor(Math.random() * 3) + 1;
    switch (compChoice) {
        case 1:
            compChoice = "Rock";
            break;
        case 2:
            compChoice = "Paper";
            break;
        case 3:
            compChoice = "Scissors";
            break;
    }
    return compChoice;
}

let winner = "";
// Playing one round of the game with two paramater playerSelection 
// and computerSelection then return the winner. the function need to be case sensitive

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = playerInput()
    console.log(playerSelection)
    console.log(computerSelection)
    
    if (playerSelection === computerSelection) {
        winner = `Both player made the same move ${computerSelection}`;
        
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winner = `You chosed ${playerSelection} and won`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        winner = `You chosed ${playerSelection} and won`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        winner = `You chosed ${playerSelection} and won`;
    }  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        winner = `You chosed ${playerSelection} and lost`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        winner = `You chosed ${playerSelection} and lost`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
       winner = `You chosed ${playerSelection} and lost`;
    }
    console.log(winner);
    return winner;
    
}
console.log(winner)

//Get input from player through a prompt
function playerInput() {
    let getInput = prompt("Make a choice Rock, Paper, Scissors");
    let input = getInput.toLowerCase();
    return input.charAt(0).toUpperCase() + input.slice(1)
}

//Function to play 5 rounds
function game() {
    let scorePlayer = 0
    let scoreComputer = 0
    for (let i = 0; i < 5; i++) {
        playRound();
        if (winner.includes("won")) {
            scorePlayer++
        } else if (winner.includes("lost")) {
            scoreComputer++
        }
        console.log(scorePlayer)
        console.log(scoreComputer)
    }
}
