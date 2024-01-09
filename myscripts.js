// create computer choice fuction that will return rock, paper, or scissors
function getComputerChoice() {
    let computerChoice = Math.random();
    //console.log(computerChoice);
    let computerPlay = (computerChoice < 0.33) ? 'Rock' :
        (computerChoice < 0.66) ? 'Paper' :
        'Scissors';
        //console.log(computerPlay);
    return computerPlay;
}



// get player choice
function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    //console.log(playerChoice);
    let playerPlay = ( playerChoice === 'rock') ? 'Rock' :
        ( playerChoice === 'paper') ? 'Paper' :
        ( playerChoice === 'scissors') ? 'Scissors' :
        'Invalid weapon';
        //console.log(playerPlay);
    return playerPlay;
}

// create function where one round of rock paper scissors is played
function playRound( playerSelection, computerSelection ) {
    console.log('Player Selection: ' + playerSelection + ' Computer Selection: ' + computerSelection);
    //Declare victory/loss statement
    let roundResult = "";
    if (playerSelection === computerSelection){
        //it's a tie
        roundResult = "tie";
            //console.log(`It is a tie. Play again.`);
            //playRound(getComputerChoice(), getPlayerChoice());
        //return;
    } else if (playerSelection === 'Rock'){
        if (computerSelection === 'Paper'){
            // player loses
            roundResult = "loss";
        } else /* computerSelection is Scissors */{
            // player wins
            roundResult = "win";
        }
    } else if (playerSelection === 'Paper') {
        if ( computerSelection === 'Rock'){
            // player wins
            roundResult = "win";
        } else /* computerSelection is Scissors */ {
            // player loses
            roundResult = "loss"
        }
    } else /* playerSelection is Scissors */ {
        if (computerSelection === 'Rock'){
            // player loses
            roundResult = "loss";
        } else /* computerSelection is Paper */ {
            // player wins
            roundResult = "win";
        }
    }

    // should never run
    if (roundResult === undefined) {
        playRound(getComputerChoice(), getPlayerChoice());
        console.log("round result is undefined");
    }
    // ^^ should never run

    if (roundResult === 'tie') {
        console.log(`It is a tie. Play again.`);
        playRound(getComputerChoice(), getPlayerChoice());
    } else if (roundResult === 'win') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (roundResult === 'loss') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    }

    return roundResult;
}

//play a best-of-five game
function game(){
    let playerScore = 0;
    let computerScore = 0;

    playRound(getComputerChoice(), getPlayerChoice());

     for (let i = 0; i < 5; ) {
        let result = playRound(getComputerChoice(), getPlayerChoice());
        //console.log("RESULT " + result);
        
        if(result === 'win'){
            playerScore++;
            i++;
        } else if(result === 'loss'){
            computerScore++;
            i++;
        } else {}
        console.log(`The score is Player: ${playerScore} Computer: ${computerScore}.`);
     }
    
}

game();