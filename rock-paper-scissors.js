function storeRockVar() {
    playerSelection = "rock"
    console.log("playerSelection is " + playerSelection)
    return playerSelection
}

const rockButton = document.getElementById("rockButton")

rockButton.addEventListener("click", () => {
    storeRockVar();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    document.getElementById("playerOutput").innerHTML = playerSelection;
    document.getElementById("computerOutput").innerHTML = computerSelection;
    document.getElementById("gameResult").innerHTML = 
    "So that means the score is You: " + playerScore + " and Computer: " + computerScore;
    game();
});

function storePaperVar() {
    playerSelection = "paper"
    console.log("playerSelection is " + playerSelection)
    return playerSelection
}

const paperButton = document.getElementById("paperButton")

paperButton.addEventListener("click", () => {
    storePaperVar();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    document.getElementById("playerOutput").innerHTML = playerSelection;
    document.getElementById("computerOutput").innerHTML = computerSelection;
    document.getElementById("gameResult").innerHTML = 
    "So that means the score is You: " + playerScore + " and Computer: " + computerScore;
    game();
});

function storeScissorsVar() {
    playerSelection = "scissors"
    console.log("playerSelection is " + playerSelection)
    return playerSelection
}

const scissorsButton = document.getElementById("scissorsButton")

scissorsButton.addEventListener("click", () => {
    storeScissorsVar();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    document.getElementById("playerOutput").innerHTML = playerSelection;
    document.getElementById("computerOutput").innerHTML = computerSelection;
    document.getElementById("gameResult").innerHTML = 
    "So that means the score is You: " + playerScore + " and Computer: " + computerScore;
    game();
});

console.log("Welcome to the game.");

let computerScore = 0;
let playerScore = 0;


function getComputerChoice(){
    let myArray = [ "rock", "paper", "scissors" ];
    return myArray[Math.floor(Math.random()*myArray.length)];
    }

function playRound(x,y){
   
    if (x === y) {
        result = "It is a tie"; 
    } else if ( x === "paper" && y === "rock"){ 
        result = "Player wins, paper beats rock"; 
        playerScore = playerScore +1;
    } else if ( x === "paper" && y === "scissors"){ 
        result = "Computer wins, scissors beats paper"; 
        computerScore = computerScore +1;
    } else if ( x === "rock" && y === "paper"){ 
        result = "Computer wins, paper beats rock"; 
        computerScore = computerScore +1;
    } else if ( x === "rock" && y === "scissors"){ 
        result = "Player wins, rock beats scissors"; 
        playerScore = playerScore +1;
    } else if ( x === "scissors" && y === "rock"){ 
        result = "Computer wins, rock beats scissors"; 
        computerScore = computerScore +1;
    } else if ( x === "scissors" && y === "paper"){ 
        result = "Player wins, scissors beats paper"; 
        playerScore = playerScore +1;
    } else { result = "You did not pick an appropriate option"; }
    
    console.log(result, playerScore, computerScore);

    // console.log('playerSelection is ' + x);
    console.log('computerSelection is ' + y);

    return(result, playerScore, computerScore)
}

function game(){
    for (var round = 0; round < 10; round++) {

if (computerScore === 3){
console.log("Computer Wins");
document.getElementById("overallResult").innerHTML = "GAME OVER - Computer Wins";
return ("GAME OVER - Computer Wins");
} if (playerScore === 3){
console.log("GAME OVER - Player Wins");
document.getElementById("overallResult").innerHTML = "GAME OVER - Player Wins";
return ("Player Wins"); 
} else {
console.log("This game will never end");
return ("This game will never end");
    }   
}
}






