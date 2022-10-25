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
        return `Both player made the same move ${computerSelection}`;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You chosed ${playerSelection} and won`;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You chosed ${playerSelection} and won`;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You chosed ${playerSelection} and won`;
    }  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You chosed ${playerSelection} and lost`;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `You chosed ${playerSelection} and lost`;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `You chosed ${playerSelection} and lost`;
    }
}

function playerInput() {
    let getInput = prompt("Make a choice Rock, Paper, Scissors");
    let input = getInput.toLowerCase();
    return input.charAt(0).toUpperCase() + input.slice(1)
}

function game() {
    for (let x = 0; x < 5; x++) {
        playRound()
    }
}