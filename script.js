//function to get the computer choice
    //pick random number 1 to 3
    //return either rock paper or scissors based on random number

let computerChoice = "";

function getComputerChoice() {
    const num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(num === 1) {
        computerChoice = "rock";
    } else if(num === 2){
        computerChoice = "paper";
    } else if(num === 3){
        computerChoice = "scissors";
    }

    return computerChoice;
}

//single round of rock paper scissors function
    //function accepts player choice and computer choice
    //return win or loss string that includes how they won or lost
    //player input should be case insensitive, use toLowerCase
    //return not console.log

//possible cases are
    //computer has rock, player has paper => player wins
    //computer has paper, player has rock => computer wins
    //computer has paper, player has scissors => player wins
    //computer has scissors, player has paper => computer wins
    //computer has scissors, player has rock => player wins
    //computer has rock, player has scissors => computer wins

function playRound(playerSelection, computerSelection){
    if(computerSelection === playerSelection){
        return("It's a tie!");
    }else if(computerSelection === "rock" && playerSelection === "paper"){
        return("You win! Paper beats Rock!");
    }else if(computerSelection === "paper" && playerSelection === "rock"){
        return("You lose. Rock looses to Paper.");
    }else if(computerSelection === "paper" && playerSelection === "scissors"){
        return("You win! Scissors beats Paper.");
    }else if(computerSelection === "scissors" && playerSelection === "paper"){
        return("You lose. Paper looses to Scissors");
    }else if(computerSelection === "scissors" && playerSelection === "rock"){
        return("You win! Rock beats Scissors");
    }else if(computerSelection === "rock" && playerSelection === "scissors"){
        return("You lose. Scissors looses to Rock");
    }
}

//get user input
    //make sure to decase it
    //pass into functions
//playGame function
    //plays five rounds of the game
    //keeps track of the score in each one
    //reports who won or lost at the end