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


function getHumanChoice(){
    for (let choice = ""; choice !== "rock", choice !== "scissors", choice !== "paper"; ){
        choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (choice=== "rock" || choice === "scissors" || choice === "paper"){
            return choice;
        } else {
            alert("That is not one of the options!")
        }
    }
}

let humanScore = 0;
let computerScore = 0;
/*
function playRound(humanChoice, computerChoice){
    if (humanSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats Rock.");
        ++computerScore;
    }else if (humanSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Rock beats Paper.");
        ++humanScore;
    }else if (humanSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats Scissors.")
        ++computerScore;
    }else if (humanSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats Scissors.");
        ++humanScore;
    }else if (humanSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beats paper.");
        ++computerScore;
    }else if (humanSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beats paper.");
        ++humanScore;
    }else {
        console.log("It's a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound();
console.log(humanScore);
console.log(computerScore);
*/

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
        if (humanChoice === "rock" && computerChoice === "paper"){
            ++computerScore;
            console.log("You lose! Paper beats Rock.");
        }else if (humanChoice === "paper" && computerChoice === "rock"){
            ++humanScore;
            console.log("You win! Rock beats Paper.")
        }else if (humanChoice === "scissors" && computerChoice === "rock"){
            ++computerScore;
            console.log("You lose! Rock beats Scissors.")
        }else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats Scissors.");
            ++humanScore;
        }else if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beats paper.");
            ++computerScore;
        }else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beats paper.");
            ++humanScore;
        }else {
            console.log("It's a tie!");
        }
        
    }

    for(let i = 0; i < 5; i++){

        const  humanSelection = getHumanChoice();
        const  computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }


    console.log(humanScore);
    console.log(computerScore);

    return;
}

playGame();

