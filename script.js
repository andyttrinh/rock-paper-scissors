const choices = ['rock', 'paper', 'scissors'];

let computerPlay = () => choices[Math.floor(Math.random() * (3 - 0) + 0)];
let playerPlay = null;

while (!choices.includes(playerPlay)) playerPlay = prompt('Enter "rock", "paper", or "scissors"');

let playRound = (playerSelection, computerSelection) => {
    const choices = [playerSelection, computerSelection];
    if (playerSelection === computerSelection) {
        console.log("It's a Tie!")
    }
    else if (choices.includes('rock') && choices.includes('paper')) {
        if (playerSelection === 'paper') console.log("Player Wins!");
        else console.log("PC Wins!");
        console.log("Paper beats Rock.")
    }
    else if (choices.includes('rock') && choices.includes('scissors')) {
        if (playerSelection === 'rock') console.log("Player Wins!");
        else console.log("PC Wins!");
        console.log("Rock beats Scissors.")
    } else {
        if (playerSelection === 'scissors') console.log("Player Wins!");
        else console.log("PC Wins!");
        console.log("Scissors beats Paper.")
    }
}

playRound(playerPlay, computerPlay());