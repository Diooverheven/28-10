const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';
const scoreTable = document.querySelector('.score');
const gameResult = document.getElementById('result');
let score = 0;
const maxRounds = 10;

const playerWin = 0;
const computerWin = 1;
const tie = 2;

let computerScore = 0;
let playerScore = 0;

const gameItems = document.querySelectorAll('.gameItem');
gameItems.forEach(item => {
    item.addEventListener('click', function () {
        const winner = playRound(item.alt, computerPlay());
        if (winner === playerWin) {
            playerScore++;
        } else if (winner === computerWin) {
            computerScore++;
        }
        scoreTable.textContent = `Computer Score: ${computerScore} - Player Score: ${playerScore}`;
        score++;
        if (score === maxRounds) {
            if (computerScore > playerScore) {
                gameResult.textContent = 'Game result: Computer WON'
            } else if (computerScore < playerScore) {
                gameResult.textContent = 'Game result: Player WON'
            } else {
                gameResult.textContent = 'Game result: TIE'
            }
        }
    });
});  

function playRound(player, computer) {
    if (player === computer) {
        return tie;
    }

    if ((player === rock && computer !== paper) ||
        (player === scissors && computer !== rock) ||
        (player === paper && computer !== scissors)
        ) {
            return playerWin;
    } else {
        return computerWin;
    }
}

function computerPlay() {
    const gameElements = [rock, paper, scissors];
    const i = Math.round(Math.random() * 2);
    return gameElements[i];
}





