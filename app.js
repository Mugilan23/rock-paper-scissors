let selection = [ 'rock', 'paper', 'scissors' ];

function computerPlay() {
	let computerChoice = selection[Math.floor(Math.random() * selection.length)];
	return computerChoice;
}

function playRound(playerSelection, computerSelection) {
	return [ playerSelection, computerSelection ];
}

const playerSelection = 'ROCK';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
