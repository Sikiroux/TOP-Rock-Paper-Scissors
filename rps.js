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
// Playing one round of the game with two paramater playerSelection 
// and computerSelection then return the winner. the function need to be case sensitive

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = playerInput()
    console.log(playerSelection)
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
        console.log(`Both player made the same move ${computerSelection}`);
        
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You chosed ${playerSelection} and won`);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You chosed ${playerSelection} and won`);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You chosed ${playerSelection} and won`);
    }  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You chosed ${playerSelection} and lost`);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You chosed ${playerSelection} and lost`);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`You chosed ${playerSelection} and lost`);
    }
}

//Get input from player through a prompt
function playerInput() {
    let getInput = prompt("Make a choice Rock, Paper, Scissors");
    let input = getInput.toLowerCase();
    return input.charAt(0).toUpperCase() + input.slice(1)
}

//Function to play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        
    }
}