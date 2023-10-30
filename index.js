//global variables

let computerScore = 0;

let userScore = 0;

function getUserChoice() {
    let choice = prompt("Enter your choice in lowercase letters: rock, paper, or scissors");
    console.log(choice);
    return choice;
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * choice.length);
    console.log(choice[randomNumber]);

    return choice[randomNumber];
}

function compareChoice() {
    
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice){
        console.log("Tie!");
    } else if(userChoice === "rock" && computerChoice === "scissors") {
        console.log("User wins!");
        return userScore = userScore + 1;
    } else if(userChoice === "rock" && computerChoice === "paper") {
        console.log("User lost!");
        return computerScore = computerScore + 1;
    } else if(userChoice === "paper" && computerChoice === "rock") {
        console.log("User wins!");
        return userScore = userScore + 1;
    } else if(userChoice === "paper" && computerChoice === "scissors") {
        console.log("User lost!");
        return computerScore = computerScore + 1;
    } else if(userChoice === "scissors" && computerChoice === "paper") {
        console.log("User wins!");
        return userScore = userScore + 1;
    } else if(userChoice === "scissors" && computerChoice === "rock") {
        console.log("User lost!!");
        return computerScore = computerScore + 1;
    } else {
        console.log("Check your grammar!");
    }  
}

console.log(compareChoice());
console.log(userScore);
console.log(computerScore);

function playGame() {
  
        if (userScore === 2) {
            console.log("Congratulations!")
        } else if (compareChoice === 2) {
            console.log("Computer wins!")
        } else {
            console.log("Try again")
        }
}

console.log(playGame());
