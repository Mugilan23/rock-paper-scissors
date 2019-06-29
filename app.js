let selection = [ 'rock', 'paper', 'scissors' ];

function computerPlay() {
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
		return `You Win!, ${playerChoice} beats ${computerChoice}`;
	} else if (
		(computerChoice === 'Scissors' && playerChoice === 'Paper') ||
		(computerChoice === 'Paper' && playerChoice === 'Rock') ||
		(computerChoice === 'Rock' && playerChoice === 'Scissors')
	) {
		return `You Lose!, ${computerChoice} beats ${playerChoice}`;
	} else {
		return `${playerChoice} is invalid`;
	}
}

const playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
