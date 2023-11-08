//global variables
const userText = document.getElementById("user");
const computerText = document.getElementById("computer");
const messageText = document.getElementById("message");

const uChoice = document.getElementById("uChoice");
const cChoice = document.getElementById("cChoice");

const playButton = document.getElementById("playButton");

let userScore = 0;
let computerScore = 0;
// let gameOver = false;

function getUserChoice() {
    let choice = prompt("Enter your choice in lowercase letters: rock, paper, or scissors");
    console.log(choice);
    uChoice.innerText = `Your choice is: ${choice}`;
    return choice;
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choice.length);
    console.log(choice[randomNumber]);
    cChoice.innerText = `The computer's choice is: ${choice[randomNumber]}`;
    
    return choice[randomNumber];
}

playButton.addEventListener("click", function startGame() {
    let user =  getUserChoice();
    let computer = getComputerChoice();

    if(user === computer){
        messageText.textContent = "It's a tie. Try again!";
    }  else if(
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer=== "rock") ||
        (user === "scissors" && computer === "paper") 
    ) {
        userScore++;
        userText.textContent = "User Score: " + userScore;
        messageText.textContent = "User wins!";
    } else {
        computerScore++;
        computerText.textContent = "Computer Score: " + computerScore;
        messageText.textContent = "User lost!";
    }
    gameWinner();
})

function gameWinner() {
    
    if (userScore === 2) {
        return messageText.textContent = "Congratulations. User won the game!!!"
    } else if (computerScore === 2) {
        return messageText.textContent = "Game Over. Computer won the game!"
    }
}

