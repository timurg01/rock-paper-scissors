function getComputerChoice(){
    //RETURN one of following strings: rock, paper, or scissors//
    //Use Math.random
    if(Math.random()<= 0.33){
        return "Rock";
    }else if(Math.random() > 0.33 && Math.random() <= 0.67){
        return "Paper";
    }else {
        return "Scissors";
    };
};

console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?");
    if (choice.toLowerCase()=== "rock"){
        return choice.toLowerCase();
    }else if (choice.toLowerCase()=== "paper"){
        return choice.toLowerCase();
    }else if (choice.toLowerCase()=== "scissors"){
        return choice.toLowerCase();
    }else {
        prompt("Thats not one of the options");
    }
    
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    
}

