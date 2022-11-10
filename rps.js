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




let btnOne = document.querySelector("#rock");
let btnTwo = document.querySelector("#paper");
let btnThree = document.querySelector("#scissors");

let valueOfPlayer = "";

let scorePlayer = 0;
let scoreComputer = 0;


    document.querySelector("#rock").onclick = () => {
        valueOfPlayer = btnOne.computedName;
    }
    document.querySelector("#paper").onclick = () => {
        valueOfPlayer = btnTwo.computedName;
    }
    document.querySelector("#scissors").onclick = () => {
        valueOfPlayer = btnThree.computedName;
    }
    console.log(valueOfPlayer) 


 div = document.querySelector("#result");
let winner = "";
// Playing one round of the game with two paramater playerSelection 
// and computerSelection then return the winner. the function need to be case sensitive

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice()
    playerSelection = valueOfPlayer
   
    
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
    
    div.textContent = `Result : ${winner}`;
    score();
    scoreBoard();
}


//Get input from player through a prompt
/*
function playerInput() {
    let getInput = prompt("Make a choice Rock, Paper, Scissors");
    let input = getInput.toLowerCase();
    return input.charAt(0).toUpperCase() + input.slice(1)
}
*/

//Get player input trough a button;



//Function to play 5 rounds

/*function game() {
    scorePlayer = 0
    scoreComputer = 0
    for (let i = 0; i < 5; i++) {
        if (btns.onclick == true) {
            if (winner.includes("won")) {
                scorePlayer++
            } else if (winner.includes("lost")) {
                scoreComputer++
            }
            console.log(scorePlayer)
            console.log(scoreComputer)
        }
    }
}
*/




// reset scoreboard
document.querySelector("#reset").onclick = () => {
    scoreComputer = 0;
    scorePlayer = 0;
    scoreP.textContent = "Player :";
    scoreC.textContent = "Computer :";
    div.textContent = "Result :"

}





//a function that return the value of the button;


//select all buttons;
const btns = document.querySelectorAll("button");

//for each button pressed execute the function playRound();
btns.forEach(button => button.addEventListener("click", playRound));

function score() {
    if (winner.includes("won")) {
        scorePlayer += 1
    } else if (winner.includes("lost")) {
            scoreComputer += 1
    }
}

const scoreP = document.querySelector(".player");
const scoreC = document.querySelector(".computer");

function scoreBoard() {
    scoreP.textContent = `Player : ${scorePlayer}`;
    scoreC.textContent = `Computer : ${scoreComputer}`;
}