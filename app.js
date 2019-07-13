const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('#result > p');
const finalResult_p = document.querySelector('#result > p:nth-child(2)');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const winScore_span = document.getElementById('win-score');
const roundNo_span = document.getElementById('round-no');

let userScore = 0;
let computerScore = 0;
let roundNumber = 0;
let winScore = Number(winScore_span.textContent);

function reset() {
	userScore = 0;
	computerScore = 0;
	roundNumber = 0;
	updateScreen(userScore, computerScore, roundNumber);
	result_p.classList.remove('hide');
	finalResult_p.classList.add('hide');
	result_p.innerHTML = 'Make a Move';
	rock_div.style.pointerEvents = 'auto';
	paper_div.style.pointerEvents = 'auto';
	scissors_div.style.pointerEvents = 'auto';
}

function updateScreen(uScore = userScore, cScore = computerScore, rNumber = roundNumber) {
	roundNumber++;
	userScore_span.innerHTML = uScore;
	computerScore_span.innerHTML = cScore;
	roundNo_span.innerHTML = rNumber;
}

function displayResult(winner) {
	result_p.classList.add('hide');
	finalResult_p.classList.remove('hide');
	finalResult_p.textContent = `${winner} Wins!`;
	rock_div.style.pointerEvents = 'none';
	paper_div.style.pointerEvents = 'none';
	scissors_div.style.pointerEvents = 'none';
	setTimeout(reset, 5000);
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

function main() {
	rock_div.addEventListener('click', () => game('r'));
	paper_div.addEventListener('click', () => game('p'));
	scissors_div.addEventListener('click', () => game('s'));
}

main();
