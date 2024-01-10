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

function playerChoice() {
    
    const choices = document.querySelectorAll('button');
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            playRound(choice.textContent,computerChoice());
        });
    });
}

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let roundStats = '';

function playRound( playerSelection, computerSelection ) {
    if(!(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors')){
    }
    if (playerSelection === computerSelection ){
        roundWinner = 'tie';
        roundStats = `It was a tie, try again.`;
        document.querySelector('#roundStats').textContent = roundStats;
        return;
    }
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')){
            playerScore++;
            roundWinner = 'Player';
            roundStats = `You win! ${playerSelection} beats ${computerSelection}`;
    }
    if ((computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')){
            computerScore++;
            roundWinner = 'Computer';
            roundStats = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    // scoreboard
    document.querySelector('#roundNumber').textContent = (playerScore + computerScore);
    document.querySelector('#playerScore').textContent = 'Player: ' + playerScore;
    document.querySelector('#computerScore').textContent = 'Computer: ' + computerScore;
    document.querySelector('#roundStats').textContent = roundStats;
    
    endGame(playerScore, computerScore);
}

function game(){
    if(playerScore > 2 || computerScore > 2){
        console.log(`The game is finished.`); 
    } else {
        playRound(playerChoice(),computerChoice());
    }  
}

function endGame(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        console.log('GAME IS OVER');
        
        const choices = document.querySelectorAll('button');
        choices.forEach((choice) => {
            choice.disabled = true;
        });

        const gameOverAnnouncement = document.createElement('p');
        gameOverAnnouncement.textContent = 'The game is over. Refresh the page to play again.';
        document.body.appendChild(gameOverAnnouncement);
    }
}

game();