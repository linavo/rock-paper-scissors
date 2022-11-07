const choices = ["Rock", "Paper", "Scissors"]; // Choices for the game

function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}
// this generates the random choices for computers

function playRound(playerSelection, computerSelection = getComputerChoice()) {
  if (playerSelection == "rock" && computerSelection == choices[0]) {
    answer = "You have tied! Both players have played rock!";
  } else if (playerSelection == "rock" && computerSelection == choices[1]) {
    answer = "Oh no! Computer wins. Paper beats rock!";
  } else if (playerSelection == "rock" && computerSelection == choices[2]) {
    answer = "You have won! Rock beats scissors";
  } else if (playerSelection == "paper" && computerSelection == choices[0]) {
    answer = "You have won! Paper beats rock!";
  } else if (playerSelection == "paper" && computerSelection == choices[2]) {
    answer = "Oh no! Computer wins. Scissors beats paper!";
  } else if (playerSelection == "paper" && computerSelection == choices[1]) {
    answer = "You have tied! Both players have played paper!";
  } else if (playerSelection == "scissors" && computerSelection == choices[0]) {
    answer = "Oh no! Computer wins. Rock beats scissors!";
  } else if (playerSelection == "scissors" && computerSelection == choices[1]) {
    answer = "You have won! Scissors beats paper!";
  } else if (playerSelection == "scissors" && computerSelection == choices[2]) {
    answer = "You have tied! Both players have played scissors!";
  } else {
    answer = "Incorrect input, try again.";
  }
  return answer;
}
//this is the code to let the console know what happens when the player and the computer chooses between rock, paper, and scissors

// let playerSelection = prompt("Enter answer here!").toLowerCase();
const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection.toLowerCase(), computerSelection));

//VERY IMPORTANT!!!! I separated playerSelection and computerSelection to do what I want instead of plugging them in directly into the console.log. I did this because the computerSelection needs to equal the random number function earlier, and the playerSelection needs to have it's answer in the const so the inputted playerSelection can have the lower case method appended. This is necessary.

let playerScore = 0;
let compScore = 0;

// this will be the beginning scores before the game keeps track

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Enter answer here!",
      "Rock, paper, or scissors"
    ).toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (playerSelection == "rock" && computerSelection == choices[1]) {
      compScore++;
    } else if (playerSelection == "rock" && computerSelection == choices[2]) {
      playerScore++;
    } else if (playerSelection == "paper" && computerSelection == choices[0]) {
      playerScore++;
    } else if (playerSelection == "paper" && computerSelection == choices[2]) {
      compScore++;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == choices[0]
    ) {
      compScore++;
    } else if (
      playerSelection == "scissors" &&
      computerSelection == choices[1]
    ) {
      playerScore++;
    } else {
    }
  }
  if (playerScore == compScore) {
    console.log("It's a tie!");
  } else if (playerScore > compScore) {
    console.log("You have won the game!");
  } else if (playerScore < compScore) {
    console.log("You have lost the game!");
  }
  console.log("Player: " + playerScore + " Computer: " + compScore);
}
// You have to re-add the getComputerChoice() in order for the computer to choose a different answer. PROBLEM WAS THE COMPUTER WASN'T RANDOMIZING ANSWER
// console.log(game());

function playRock() {
  results.textContent = playRound("rock");
}
function playPaper() {
  results.textContent = playRound("paper");
}
function playScissors() {
  results.textContent = playRound("scissors");
}

// const play = document.querySelector("#play");
// play.addEventListener("click", playGame);

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", playRock);

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", playPaper);

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", playScissors);

const results = document.querySelector("#result");
