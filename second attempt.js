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

    console.log('playerSelection is ' + x);
    console.log('computerSelection is ' + y);

    return(result, playerScore, computerScore)
}

function game(){
    for (var round = 0; round < 10; round++) {

if (computerScore === 2){
console.log("Computer Wins");
return ("Computer Wins");
} if (playerScore === 2){
console.log("Player Wins");
return ("Player Wins"); 
} else {
    
    let computerSelection = getComputerChoice();

    let playerSelectionFreeform = prompt('Choose Rock, Paper, or Scissors');
    let playerSelection = playerSelectionFreeform.toLowerCase();

    playRound(playerSelection, computerSelection);
       
    }   
}
}

game();





// function loop(x) {
//     // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
//     if (x >= 10) {
//       return;
//     }
//     // do stuff
//     loop(x + 1); // the recursive call
//   }
//   loop(0);