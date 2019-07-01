let winScore, playerScore, computerScore;

function computerPlay() {
	let selection = [ 'rock', 'paper', 'scissors' ];
	let computerChoice = selection[Math.floor(Math.random() * selection.length)];
	return computerChoice;
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
	let player = capitalizeFirstLetter(playerSelection.toLowerCase());
	let computer = capitalizeFirstLetter(computerSelection.toLowerCase());
	let result = getResult(player, computer);
	return result;
}

function getResult(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return 'Draw';
	} else if (
		(playerChoice === 'Scissors' && computerChoice === 'Paper') ||
		(playerChoice === 'Paper' && computerChoice === 'Rock') ||
		(playerChoice === 'Rock' && computerChoice === 'Scissors')
	) {
		playerScore++;
		return `You Win!, ${playerChoice} beats ${computerChoice}`;
	} else if (
		(computerChoice === 'Scissors' && playerChoice === 'Paper') ||
		(computerChoice === 'Paper' && playerChoice === 'Rock') ||
		(computerChoice === 'Rock' && playerChoice === 'Scissors')
	) {
		computerScore++;
		return `You Lose!, ${computerChoice} beats ${playerChoice}`;
	} else {
		return `${playerChoice} is invalid`;
	}
}

function game(gameLength) {
	winScore = gameLength;
	computerScore = 0;
	playerScore = 0;
	while (computerScore < winScore && playerScore < winScore) {
		let playerSelection = prompt('Rock or Paper or Scissors');
		let computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
		console.log('Player = ' + playerScore + ', Computer = ' + computerScore);
	}
	if (playerScore === winScore) {
		console.log('Player Won');
	} else {
		console.log('Computer Won');
	}
}

let gameLength = Number(prompt('Enter the Winning Score', 5));

game(gameLength);
