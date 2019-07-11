const options = [ 'rock', 'paper', 'scissors' ];

let pDisplay = document.getElementById('player-choice');
let cpuDisplay = document.getElementById('computer-choice');

// creates new buttons based off options
let optionsDiv = document.getElementById('playing-choices');
options.forEach((option) => {
	let newBtn = document.createElement('button');
	newBtn.innerText = option;
	optionsDiv.append(newBtn);
});

let buttons = document.querySelectorAll('#playing-choices button');
buttons.forEach((btn) =>
	btn.addEventListener('click', (e) => {
		playRound(e.target.textContent);
	})
);

function computerPlay() {
	let computerChoice = options[Math.floor(Math.random() * options.length)];
	return computerChoice;
}

function playRound(playerSelection) {
	pDisplay.textContent = playerSelection;
	cpuDisplay.innerText = computerPlay();
}
