


const choices = ['rock', 'paper', 'scissors'];

let computerPlay = () => choices[Math.floor(Math.random() * (3 - 0) + 0)];
let playerPlay = () => {
    playerChoice = null;
    while (!choices.includes(playerChoice)) playerChoice = prompt('Enter "rock", "paper", or "scissors"');
    return playerChoice;
}



let playRound = (playerSelection, computerSelection) => {
    const choices = [playerSelection, computerSelection()];
    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
    if (playerSelection === computerSelection) {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    else if (choices.includes('rock') && choices.includes('paper')) {
        if (playerSelection === 'paper') playerScore.textContent = parseInt(playerScore.textContent) + 1;
        else computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    else if (choices.includes('rock') && choices.includes('scissors')) {
        if (playerSelection === 'rock') playerScore.textContent = parseInt(playerScore.textContent) + 1;
        else computerScore.textContent = parseInt(computerScore.textContent) + 1;
    } else {
        if (playerSelection === 'scissors') playerScore.textContent = parseInt(playerScore.textContent) + 1;
        else computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    if (playerScore.textContent === '5' || computerScore.textContent === '5') {
        const winner = document.createElement('h1');
        winner.textContent = playerScore.textContent === '5' ? 'Player Wins!' : 'Computer Wins!';
        winner.classList.add('winner');
        document.body.prepend(winner);
        buttons.forEach(button => button.removeEventListener('click', runPlay))
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

// Events
const buttons = document.querySelectorAll("button");
// function clicked(e) {
//     console.log(this.id);
// }
function runPlay (e) {
    playRound(this.id, computerPlay);
}
buttons.forEach(button => button.addEventListener("click", runPlay));



// game();