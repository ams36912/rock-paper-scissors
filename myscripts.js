// create computer choice fuction that will return rock, paper, or scissors
function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
  }
}

// get player choice
function playerChoice() {
    let choice = prompt("Choose rock, paper, or scissors.");
    choice = choice.substring(0,1).toUpperCase() + choice.substring(1).toLowerCase();
    //console.log(playerChoice);
    if (!(choice === 'Rock' || choice === 'Paper' || choice === 'Scissors')){
        choice = '';
        //console.log("INVALID");
    }
    return choice;
}

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


// create function where one round of rock paper scissors is played
function playRound( playerSelection, computerSelection ) {
    
    if(!(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors')){
        console.log(`That is an invalid weapon.`);
        return;
    }
    if (playerSelection === computerSelection ){
        roundWinner = 'tie';
        console.log(`It was a tie, try again. ${playerSelection} beats ${computerSelection}`);
        return;
    }
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')){
            playerScore++;
            roundWinner = 'Player';
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            
    }
    if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')){
            computerScore++;
            roundWinner = 'Computer';
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            
    }
    console.log(`The score is Player: ${playerScore} Computer: ${computerScore}`);
    console.log('***');   
    return;

}

// //play a best-of-five game
function game(){

    while((playerScore + computerScore) < 5){
        playRound(playerChoice(),computerChoice());
    }
    console.log(`The game is finished.`);  
}

game();