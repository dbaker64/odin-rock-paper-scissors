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

//playGame function
    //plays five rounds of the game
    //keeps track of the score in each one
    //reports who won or lost at the end