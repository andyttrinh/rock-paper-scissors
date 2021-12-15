const choices = ['rock', 'paper', 'scissors'];

let computerPlay = () => choices[Math.floor(Math.random() * (3 - 0) + 0)];
let playerPlay = null;

while (!choices.includes(playerPlay)) playerPlay = prompt('Enter "rock", "paper", or "scissors"');

