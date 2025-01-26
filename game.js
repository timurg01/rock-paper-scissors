const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
let humanScore = 0;
let computerScore = 0;
const cscore = document.querySelector(".cscore");
const pscore = document.querySelector(".pscore");
const result = document.querySelector(".result");
const winner = document.querySelector(".winner")

function getComputerChoice(){
    //RETURN one of following strings: rock, paper, or scissors//
    //Use Math.random
    if(Math.random()<= 0.33){
        return "rock";
    }else if(Math.random() <= 0.67){
        return "paper";
    }else {
        return "scissors";
    };
};
    
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "paper"){
        result.textContent = "You lose! Paper beats Rock.";
        ++computerScore;
        cscore.textContent = `Computer Score: ${computerScore}`
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        result.textContent = "You win! Rock beats Paper.";
        ++humanScore;
        pscore.textContent = `Your Score: ${humanScore}`
    }else if (humanChoice === "scissors" && computerChoice === "rock"){
        result.textContent = "You lose! Rock beats Scissors.";
        ++computerScore;
        cscore.textContent = `Computer Score: ${computerScore}`
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        result.textContent = "You win! Rock beats Scissors.";
        ++humanScore;
        pscore.textContent = `Your Score: ${humanScore}`
    }else if (humanChoice === "paper" && computerChoice === "scissors"){
        result.textContent = "You lose! Scissors beats paper.";
        ++computerScore;
        cscore.textContent = `Computer Score: ${computerScore}`
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        result.textContent = "You win! Scissors beats paper.";
        ++humanScore;
        pscore.textContent = `Your Score: ${humanScore}`
    }else {
        result.textContent = "It's a tie!";
    }
    if (computerScore === 5) {
        winner.textContent = "OH NO, You Lost :(";
    }else if (humanScore === 5) {
        winner.textContent = "HOORAY, You Won!!";
    }
}

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
