let userScore = 0;
let computerScore = 0;
let roundNumber = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('#result > p');
const finalResult_p = document.querySelector('#result > p:nth-child(2)');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const winScore_span = document.getElementById('win-score');
const roundNo_span = document.getElementById('round-no');

function updateScreen() {
	roundNumber++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	roundNo_span.innerHTML = roundNumber;
}

function displayResult(winner) {
	result_p.classList.add('hide');
	finalResult_p.classList.remove('hide');
	finalResult_p.textContent = `${winner} Wins!`;
}

function convertToWord(letter) {
	if (letter === 'r') return 'Rock';
	if (letter === 'p') return 'Paper';
	return 'Scissors';
}

function getResultAction(userChoice, computerChoice) {
	let resultAction = '';
	switch (userChoice + computerChoice) {
		case 'rs':
		case 'sr':
			resultAction = 'breaks';
			break;
		case 'pr':
		case 'rp':
			resultAction = 'covers';
			break;
		case 'sp':
		case 'ps':
			resultAction = 'cuts';
			break;
		default:
			resultAction = 'equals';
	}
	return resultAction;
}

function win(userChoice, computerChoice) {
	let action = getResultAction(userChoice, computerChoice);
	userScore++;
	result_p.innerHTML = `You Win! ${convertToWord(userChoice)} ${action} ${convertToWord(computerChoice)}`;
	if (userScore === winScore) displayResult('User');
	updateScreen();
}
function lose(userChoice, computerChoice) {
	let action = getResultAction(userChoice, computerChoice);
	computerScore++;
	result_p.innerHTML = `You lose! ${convertToWord(computerChoice)} ${action} ${convertToWord(userChoice)}`;
	if (computerScore === winScore) displayResult('Computer');
	updateScreen();
}
function draw(userChoice, computerChoice) {
	let action = getResultAction(userChoice, computerChoice);
	result_p.innerHTML = `Draw! ${convertToWord(userChoice)} ${action} ${convertToWord(computerChoice)}`;
	updateScreen();
}

function getComputerChoice() {
	const choices = [ 'r', 'p', 's' ];
	const randomNumber = Math.floor(Math.random() * choices.length);
	return choices[randomNumber];
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, computerChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
			break;
		default:
			console.log('INVALID');
	}
}

function main(winScore = 5) {
	winScore_span.textContent = winScore;
	rock_div.addEventListener('click', () => game('r'));
	paper_div.addEventListener('click', () => game('p'));
	scissors_div.addEventListener('click', () => game('s'));
}

function begin() {
	let winScore = Number(prompt('Set the Winning Score', 5));
	if (winScore < 1 || isNaN(winScore)) {
		main();
	} else {
		main(winScore);
	}
}

begin();
