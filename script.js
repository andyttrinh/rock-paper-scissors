const choices = ['rock', 'paper', 'scissors'];

let computerPlay = () => choices[Math.floor(Math.random() * (3 - 0) + 0)];
let playerPlay = () => {
    playerChoice = null;
    while (!choices.includes(playerChoice)) playerChoice = prompt('Enter "rock", "paper", or "scissors"');
    return playerChoice;
}



let playRound = (playerSelection, computerSelection) => {
    const choices = [playerSelection, computerSelection];
    if (playerSelection === computerSelection) {
        return null;
    }
    else if (choices.includes('rock') && choices.includes('paper')) {
        if (playerSelection === 'paper') return 1;
        else return 0;
    }
    else if (choices.includes('rock') && choices.includes('scissors')) {
        if (playerSelection === 'rock') return 1;
        else return 0;
    } else {
        if (playerSelection === 'scissors') return 1;
        else return 0;
    }
}

let game = () => {
    let playerScore, computerScore;
    playerScore = computerScore = 0;
    for (let i = 0; i < 5; i++) {
       const res = playRound(playerPlay(), computerPlay());
       if (res === 0) {
           console.log("PC wins")
           computerScore++;
       }
       else if (res === 1) {
           console.log("Player wins")
           playerScore++;
       } else {
           console.log("It's a tie")
       }
    }

    if (playerScore > computerScore) {
        console.log(`Player wins, ${playerScore} - ${computerScore}`);
    }
    else if (computerScore > playerScore) {
        console.log(`Computer wins, ${computerScore} - ${playerScore}`);
    } else {
        console.log(`It is a tie, ${computerScore} - ${playerScore}`);
    }
}

game();